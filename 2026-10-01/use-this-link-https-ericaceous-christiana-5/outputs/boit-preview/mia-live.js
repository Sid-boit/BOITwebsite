(() => {
 const panel=document.querySelector('.myra-panel');
 const box=panel.querySelector('.myra-disabled');
 box.innerHTML='<button type="button" class="mia-start" disabled>Start voice conversation</button><button type="button" class="mia-stop" hidden>End conversation</button><span class="mia-status" role="status">Checking voice connection…</span><p class="mia-transcript" aria-live="polite"></p>';
 const start=box.querySelector('.mia-start'),stop=box.querySelector('.mia-stop'),status=box.querySelector('.mia-status'),transcript=box.querySelector('.mia-transcript');
 let pc,stream,channel,timer,audio=new Audio(),connecting=false;
 audio.autoplay=true;
 const end=()=>{clearTimeout(timer);stream?.getTracks().forEach(t=>t.stop());pc?.close();audio.pause();audio.srcObject=null;pc=null;stream=null;channel=null;connecting=false;stop.hidden=true;start.hidden=false;start.disabled=false;status.textContent='Conversation ended.';};
 panel.addEventListener('close',()=>{if(pc||stream||connecting)end();});
 stop.onclick=end;
 fetch('/api/mia/status').then(r=>r.ok?r.json():Promise.reject()).then(s=>{start.disabled=!s.ready;status.textContent=s.ready?'Live AI voice · microphone audio is sent to OpenAI · portrait only':'Voice setup pending: add an OpenAI API key on the local server.';panel.querySelector('.myra-connection').hidden=s.ready;}).catch(()=>{status.textContent='Voice setup pending: start the MIA-enabled preview server.';});
 start.onclick=async()=>{
  start.disabled=true;connecting=true;status.textContent='Connecting…';
  try{
   const token=await fetch('/api/mia/token',{method:'POST'});if(!token.ok){const problem=await token.json().catch(()=>({}));throw Error(problem.error||'Voice connection unavailable. Restart the MIA server to load the latest setup.');}const secret=await token.json();
   if(!connecting)return;
   pc=new RTCPeerConnection();pc.ontrack=e=>{audio.srcObject=e.streams[0];audio.play().catch(()=>{status.textContent='Allow audio playback to hear MIA.';});};
   stream=await navigator.mediaDevices.getUserMedia({audio:true});if(!connecting){stream.getTracks().forEach(t=>t.stop());return;}stream.getTracks().forEach(t=>pc.addTrack(t,stream));
   channel=pc.createDataChannel('oai-events');channel.onmessage=e=>{const v=JSON.parse(e.data);if(v.type==='response.output_audio_transcript.delta')transcript.textContent+=v.delta;if(v.type==='response.created')transcript.textContent='';if(v.type==='error'){end();status.textContent='The voice service reported an error. Please reconnect.';}};
   channel.onopen=()=>{status.textContent='Listening · speak naturally · session ends after 5 minutes';start.hidden=true;stop.hidden=false;channel.send(JSON.stringify({type:'response.create',response:{instructions:'Briefly introduce yourself as MIA and ask how you can help with BOIT products.'}}));timer=setTimeout(end,300000);};
   pc.onconnectionstatechange=()=>{if(pc&&['failed','disconnected'].includes(pc.connectionState))end();};
   const offer=await pc.createOffer();await pc.setLocalDescription(offer);
   const answer=await fetch('https://api.openai.com/v1/realtime/calls',{method:'POST',headers:{Authorization:'Bearer '+secret.value,'Content-Type':'application/sdp'},body:offer.sdp});if(!answer.ok){
 const detail=await answer.json().catch(()=>({}));
 const code=detail.error?.code||detail.code;
 const message=detail.error?.message||detail.message;
 const known={insufficient_quota:'API credits or billing quota are insufficient. Check billing for the project that owns this key.',model_not_found:'The realtime model is unavailable to this project.',invalid_api_key:'The temporary voice token was rejected. Please reconnect.',rate_limit_exceeded:'OpenAI rate limit reached. Please wait and retry.'};
 throw Error(known[code]||('Voice session failed (HTTP '+answer.status+')'+(code?' ['+code+']':'')+(message?': '+message.slice(0,350):'.')));
 }await pc.setRemoteDescription({type:'answer',sdp:await answer.text()});
  }catch(e){end();status.textContent=e.name==='NotAllowedError'?'Microphone access was declined.':e.message;}
 };
})();
