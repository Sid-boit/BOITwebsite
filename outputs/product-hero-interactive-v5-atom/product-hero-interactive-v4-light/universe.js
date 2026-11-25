(() => {
  'use strict';
  const root=document.getElementById('boit-universe');
  if(!root) return;
  const base='https://ericaceous-christiana-proscribable.ngrok-free.dev';
  const offerings=[
    {id:'life',title:'Life, Annuity & Medical Insurance',type:'vertical',path:'/platform/insurance/life-annuity-medical',description:'Connect life, annuity, and medical insurance journeys—from new business and underwriting to policy servicing, claims, and customer engagement.',tags:['Life & takaful','Annuity','Medical & TPA'],icon:'heart'},
    {id:'property',title:'Property & Casualty Insurance',type:'vertical',path:'/platform/insurance/property-casualty',description:'Unify personal and commercial lines with intelligent underwriting, policy servicing, claims, and recovery across home, motor, fleet, and specialty risks.',tags:['Personal lines','Commercial lines','Claims & recovery'],icon:'home'},
    {id:'banking',title:'Banking & Financial Services',type:'vertical',path:'/platform/banking/financial-services',description:'Connect retail, corporate, and investment banking through digital channels, automated operations, customer intelligence, and stronger risk oversight.',tags:['Retail banking','Corporate banking','Investment banking'],icon:'bank'},
    {id:'automation',title:'Intelligent Process Automation',type:'solution',path:'/product/solutions/intelligent-process-automation',description:'Combine AI and RPA to coordinate new business, underwriting, policy servicing, and claims—reducing manual handoffs and keeping exceptions visible.',tags:['New business','Underwriting','Servicing & claims'],icon:'workflow'},
    {id:'case',title:'Smart Case Management',type:'solution',path:'/product/solutions/smart-case-management',description:'Bring intake, evidence review, task assignment, and resolution into one case view, with preserved context, collaboration, and SLA-aware routing.',tags:['Intake & review','SLA-aware routing','Case resolution'],icon:'case'},
    {id:'core',title:'Insurance Core Modernization',type:'solution',path:'/product/solutions/insurance-core-modernization',description:'Modernize policy administration, billing, and claims on a modular architecture that connects systems and supports new products and digital experiences.',tags:['Modernize','Integrate','Optimize & scale'],icon:'layers'},
    {id:'medical',title:'Medical Underwriting',type:'solution',path:'/product/solutions/medical-underwriting',description:'Organize medical evidence, analyze health and applicant data, and surface risk insights and recommended decisions for expert underwriting review.',tags:['Collect evidence','Assess risk','Support decisions'],icon:'pulse'},
    {id:'motor',title:'Motor Claims Management',type:'solution',path:'/product/solutions/motor-claims-management',description:'Digitize the motor claims journey from first notice of loss to closure, connecting image-based damage assessment, repair networks, and settlement workflows.',tags:['Digital FNOL','Damage assessment','Settlement'],icon:'car'},
    {id:'fraud',title:'Fraud Detection & Management',type:'solution',path:'/product/solutions/fraud-detection',description:'Analyze claims, applications, payments, and identity signals to identify anomalies, prioritize alerts, and package evidence for investigators.',tags:['Anomaly detection','Investigation','Evidence trails'],icon:'shield'},
    {id:'kyc',title:'e-KYC & Customer Onboarding',type:'solution',path:'/product/solutions/ekyc-onboarding',description:'Guide digital identity capture, document extraction, face matching, and liveness checks through to account, policy, or card onboarding.',tags:['Document verification','Biometrics','Digital onboarding'],icon:'identity'},
    {id:'agency',title:'ePOS & Agency Management',type:'solution',path:'/product/solutions/epos-agency',description:'Equip agents with digital quoting and issuance, pipeline analytics, and agency management tools across branches, distribution partners, and mobile channels.',tags:['Quote & issue','Agency network','Sales analytics'],icon:'growth'},
    {id:'aml',title:'Digital AML & Compliance',type:'solution',path:'/product/solutions/digital-aml',description:'Connect customer screening, transaction monitoring, sanctions and PEP checks, and regulatory reporting with risk context and auditable evidence.',tags:['Screen & monitor','Risk assessment','Regulatory reporting'],icon:'compliance'}
  ];
  const paths={
    heart:'M12 20S3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12Z',
    home:'m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7',
    bank:'m3 8 9-5 9 5ZM3 21h18M5 10v8m7-8v8m7-8v8',
    workflow:'M3 3h7v6H3ZM14 15h7v6h-7ZM3 15h7v6H3ZM10 6h8v9M6 9v6m4 3h4',
    case:'M3 6h7l2 2h9v12H3ZM6 12h12M6 16h8',
    layers:'m3 7 9-4 9 4-9 4Zm0 5 9 4 9-4M3 17l9 4 9-4',
    pulse:'M2 12h5l3-8 4 16 3-8h5',
    car:'m5 7-2 7v6h3v-3h12v3h3v-6l-2-7ZM3 13h18M7 7h10M6 14h2m8 0h2',
    shield:'M12 3 21 7v6c0 4-9 9-9 9s-9-5-9-9V7Zm-4 9 3 3 5-6',
    identity:'M3 5h18v14H3ZM7 14c0-3 5-3 5 0m-1-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 0h3m-3 4h3',
    growth:'M3 21V10m6 11V7m6 14v-9m6 9V3M3 7l6-4 6 5 6-5',
    compliance:'M5 3h10l4 4v14H5ZM15 3v5h4M8 12h8m-8 4h4'
  };
  const $=id=>document.getElementById(id);
  const stage=$('orbit-stage'),nodeRoot=$('product-nodes'),wireRoot=$('product-connections');
  const ns='http://www.w3.org/2000/svg';
  const makeSvg=(tag,attrs)=>{const el=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));return el;};
  const nodes=[],wires=[],pulses=[],directory=[];
  let selected=null,manualPause=false,hoverPause=false,focusPause=false,hidden=document.hidden;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile=window.matchMedia('(max-width: 700px)');
  let width=0,height=0,phase=0,last=0,frame=0;
  offerings.forEach((p,index)=>{
    const button=document.createElement('button');button.type='button';button.className='orbit-node '+p.type;button.dataset.product=p.id;button.setAttribute('aria-label',p.title+'. Show product details.');button.setAttribute('aria-pressed','false');
    const icon=document.createElement('span');icon.className='node-icon';icon.setAttribute('aria-hidden','true');const svg=makeSvg('svg',{viewBox:'0 0 24 24'});svg.append(makeSvg('path',{d:paths[p.icon]}));icon.append(svg);
    const title=document.createElement('span');title.className='node-title';title.textContent=p.title;
    const number=document.createElement('span');number.className='node-mobile-number';number.setAttribute('aria-hidden','true');number.textContent=String(index+1).padStart(2,'0');button.append(icon,title,number);button.addEventListener('click',()=>select(p.id));nodeRoot.append(button);nodes.push(button);
    const wire=makeSvg('line',{x1:450,y1:300,x2:450,y2:300,class:'product-wire'});const pulse=makeSvg('line',{x1:450,y1:300,x2:450,y2:300,class:'wire-pulse'});wireRoot.append(wire,pulse);wires.push(wire);pulses.push(pulse);
    const item=document.createElement('article');item.className='portfolio-item';
    const choose=document.createElement('button');choose.type='button';const count=document.createElement('span');count.className='index';count.textContent=String(index+1).padStart(2,'0');const label=document.createElement('span');label.textContent=p.title;choose.append(count,label);choose.addEventListener('click',()=>{select(p.id);$('selection-title').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'center'});});
    const summary=document.createElement('p');summary.textContent=p.description;
    const link=document.createElement('a');link.href=base+p.path;link.textContent='Explore offering ↗';link.setAttribute('aria-label','Explore '+p.title);
    item.append(choose,summary,link);$(p.type==='vertical'?'vertical-directory':'solution-directory').append(item);directory.push(item);
  });
  function select(id){
    const p=offerings.find(p=>p.id===id);if(!p)return;
    selected=p.id;
    $('selection-kicker').textContent=p.type==='vertical'?'BUSINESS VERTICAL':'BUSINESS SOLUTION';$('selection-title').textContent=p.title;$('selection-description').textContent=p.description;
    $('selection-tags').replaceChildren(...p.tags.map(text=>{const el=document.createElement('span');el.textContent=text;return el;}));
    $('selection-link').href=base+p.path;$('selection-link').replaceChildren(document.createTextNode('Explore this offering '));const arrow=document.createElement('span');arrow.textContent='↗';$('selection-link').append(arrow);
    offerings.forEach((p,i)=>{const active=p.id===id;nodes[i].classList.toggle('selected',active);nodes[i].setAttribute('aria-pressed',String(active));wires[i].classList.toggle('selected',active);pulses[i].classList.toggle('selected',active);directory[i].classList.toggle('selected',active);});
    const panel=root.querySelector('.selection');panel.removeAttribute('data-selected');requestAnimationFrame(()=>panel.setAttribute('data-selected','true'));
    root.dataset.selected=id;
  }
  function reset(){
    selected=null;delete root.dataset.selected;
    $('selection-kicker').textContent='THE INTELLIGENCE AT THE CENTRE';$('selection-title').textContent='One AI brain. A connected product universe.';$('selection-description').textContent='BOIT’s domain-focused LLM, specialist agents, and AI orchestration connect industry context, execution, and human oversight across the portfolio.';
    $('selection-tags').replaceChildren(...['Domain LLM','Specialist agents','AI orchestration'].map(text=>{const el=document.createElement('span');el.textContent=text;return el;}));$('selection-link').href='#portfolio';$('selection-link').textContent='Explore all 12 offerings →';
    nodes.forEach((n,i)=>{n.classList.remove('selected');n.setAttribute('aria-pressed','false');wires[i].classList.remove('selected');pulses[i].classList.remove('selected');directory[i].classList.remove('selected');});
  }
  $('brain-button').addEventListener('click',reset);
  function layout(){
    const rect=stage.getBoundingClientRect();width=rect.width;height=rect.height;
    nodes.forEach(node=>node.style.width=mobile.matches?'38px':Math.min(164,width*.185)+'px');
    position();
  }
  function position(){
    if(!width||!height)return;
    offerings.forEach((p,i)=>{
      const angle=-Math.PI/2+i*Math.PI*2/offerings.length+phase;
      const x=450+344*Math.cos(angle),y=300+208*Math.sin(angle);
      const depth=(Math.sin(angle)+1)/2;
      nodes[i].style.transform='translate3d('+x/900*width+'px,'+y/620*height+'px,0) translate(-50%,-50%)';nodes[i].style.zIndex=String(4+Math.round(depth*10));
      wires[i].setAttribute('x2',x.toFixed(2));wires[i].setAttribute('y2',y.toFixed(2));pulses[i].setAttribute('x2',x.toFixed(2));pulses[i].setAttribute('y2',y.toFixed(2));
    });
  }
  const isPaused=()=>manualPause||hoverPause||focusPause||hidden||reduced.matches;
  function syncMotion(){
    root.classList.toggle('paused',isPaused());$('orbit-toggle').setAttribute('aria-pressed',String(manualPause));$('orbit-toggle').setAttribute('aria-label',manualPause?'Resume product orbit':'Pause product orbit');$('orbit-toggle').replaceChildren(document.createTextNode(manualPause?'▶ ':'Ⅱ '));const text=document.createElement('span');text.textContent=manualPause?'Resume':'Pause';$('orbit-toggle').append(text);
    $('orbit-toggle').disabled=reduced.matches;
    if(reduced.matches){$('orbit-toggle').textContent='Motion off';$('orbit-toggle').setAttribute('aria-label','Orbit disabled by reduced motion preference');}
    $('orbit-status').textContent=reduced.matches?'Motion reduced · Select to explore':manualPause?'Orbit paused · Select to explore':hoverPause||focusPause?'Paused for exploration':'Hover to pause · Select to explore';
  }
  $('orbit-toggle').addEventListener('click',()=>{manualPause=!manualPause;syncMotion();});
  stage.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch'){hoverPause=true;syncMotion();}});
  stage.addEventListener('pointerleave',()=>{hoverPause=false;syncMotion();});
  stage.addEventListener('focusin',()=>{focusPause=true;syncMotion();});
  stage.addEventListener('focusout',event=>{if(!stage.contains(event.relatedTarget)){focusPause=false;syncMotion();}});
  document.addEventListener('visibilitychange',()=>{hidden=document.hidden;syncMotion();});reduced.addEventListener('change',syncMotion);
  // Add a subtle connected neural mesh inside the sculpted brain silhouette.
  const mesh=$('neural-mesh');const points=[[85,105],[129,83],[169,102],[55,149],[105,145],[146,153],[183,164],[74,195],[114,198],[158,218],[103,247],[150,265],[315,105],[271,83],[231,102],[345,149],[295,145],[254,153],[217,164],[326,195],[286,198],[242,218],[297,247],[250,265]];
  points.forEach((point,i)=>{points.map((p,j)=>({j,d:(p[0]-point[0])**2+(p[1]-point[1])**2})).filter(p=>p.j!==i).sort((a,b)=>a.d-b.d).slice(0,3).forEach(({j})=>{if(j>i)mesh.append(makeSvg('line',{x1:point[0],y1:point[1],x2:points[j][0],y2:points[j][1],class:'neural-line'}));});mesh.append(makeSvg('circle',{cx:point[0],cy:point[1],r:i%3===0?2.7:1.7,class:'neural-dot'}));});
  function animate(time){const delta=last?Math.min((time-last)/1000,.1):0;last=time;if(!isPaused()){phase=(phase+delta*.045)%(Math.PI*2);position();}frame=requestAnimationFrame(animate);}
  const observer=new ResizeObserver(layout);observer.observe(stage);layout();syncMotion();frame=requestAnimationFrame(animate);
  // Optional embedding API. The host can tear down animation when unmounting.
  root.boitUniverse={select,offerings:offerings.map(p=>({...p})),destroy(){cancelAnimationFrame(frame);observer.disconnect();}};
})();
