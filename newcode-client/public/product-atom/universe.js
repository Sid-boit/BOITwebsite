(() => {
  'use strict';
  const root=document.getElementById('boit-universe');
  if(!root) return;
  const base='';
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
  const images=['01-life-annuity-medical.webp', '02-property-casualty.webp', '03-financial-services.webp', '04-intelligent-process-automation.webp', '05-smart-case-management.webp', '06-insurance-core-modernization.webp', '07-medical-underwriting.webp', '08-motor-claims-management.webp', '09-fraud-detection.webp', '10-ekyc-onboarding.webp', '11-epos-agency.webp', '12-digital-aml.webp'];
  offerings.forEach((p,index)=>{p.image='./assets/'+images[index];});
  const $=id=>document.getElementById(id);
  const stage=$('orbit-stage'),nodeRoot=$('product-nodes'),wireRoot=$('product-connections');
  const ns='http://www.w3.org/2000/svg';
  const makeSvg=(tag,attrs)=>{const el=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));return el;};
  const nodes=[],wires=[],pulses=[],directory=[];
  let selected=null,manualPause=false,hoverPause=false,focusPause=false,hidden=document.hidden;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile=window.matchMedia('(max-width: 700px)');
  let width=0,height=0,phase=0,last=0,frame=0;
  const center={x:450,y:300};
  const orbits=[
    {rx:350,ry:122,tilt:0,offset:.18,speed:1},
    {rx:290,ry:115,tilt:-52,offset:.73,speed:.86},
    {rx:290,ry:115,tilt:52,offset:1.21,speed:-1.08}
  ];
  function orbitPoint(index,timePhase){
    const plane=index%orbits.length,slot=Math.floor(index/orbits.length),orbit=orbits[plane];
    const angle=slot*Math.PI/2+orbit.offset+timePhase*orbit.speed;
    const u=orbit.rx*Math.cos(angle),v=orbit.ry*Math.sin(angle),tilt=orbit.tilt*Math.PI/180;
    return {x:center.x+u*Math.cos(tilt)-v*Math.sin(tilt),y:center.y+u*Math.sin(tilt)+v*Math.cos(tilt),depth:Math.sin(angle),plane};
  }
  offerings.forEach((p,index)=>{
    const button=document.createElement('button');button.type='button';button.className='orbit-node '+p.type;button.dataset.product=p.id;button.setAttribute('aria-label',p.title+'. Show product details.');button.setAttribute('aria-pressed','false');
    const image=document.createElement('img');image.className='product-thumbnail';image.src=p.image;image.alt='';image.width=160;image.height=160;image.draggable=false;
    const title=document.createElement('span');title.className='node-title';title.textContent=p.title;
    const number=document.createElement('span');number.className='node-mobile-number';number.setAttribute('aria-hidden','true');number.textContent=String(index+1).padStart(2,'0');button.append(image,title,number);button.addEventListener('click',()=>select(p.id));nodeRoot.append(button);nodes.push(button);
    const wire=makeSvg('line',{x1:450,y1:300,x2:450,y2:300,class:'product-wire'});const pulse=makeSvg('line',{x1:450,y1:300,x2:450,y2:300,class:'wire-pulse'});wireRoot.append(wire,pulse);wires.push(wire);pulses.push(pulse);
    const item=document.createElement('article');item.className='portfolio-item';
    const choose=document.createElement('button');choose.type='button';const count=document.createElement('span');count.className='index';count.textContent=String(index+1).padStart(2,'0');const label=document.createElement('span');label.textContent=p.title;choose.append(count,label);choose.addEventListener('click',()=>{select(p.id);});
    const summary=document.createElement('p');summary.textContent=p.description;
    const link=document.createElement('a');link.href=base+p.path;link.textContent='Explore offering ↗';link.setAttribute('aria-label','Explore '+p.title);
    item.append(choose,summary,link);const dir=$(p.type==='vertical'?'vertical-directory':'solution-directory');if(dir){dir.append(item);directory.push(item);}else{directory.push(null);}
  });
  function select(id){
    const p=offerings.find(p=>p.id===id);if(!p)return;
    selected=p.id;
    $('selection-kicker').textContent=p.type==='vertical'?'BUSINESS VERTICAL':'BUSINESS SOLUTION';$('selection-title').textContent=p.title;$('selection-description').textContent=p.description;
    $('selection-tags').replaceChildren(...p.tags.map(text=>{const el=document.createElement('span');el.textContent=text;return el;}));
    $('selection-link').href=base+p.path;$('selection-link').textContent='Explore this offering';
    offerings.forEach((p,i)=>{const active=p.id===id;nodes[i].classList.toggle('selected',active);nodes[i].setAttribute('aria-pressed',String(active));wires[i].classList.toggle('selected',active);pulses[i].classList.toggle('selected',active);if(directory[i])directory[i].classList.toggle('selected',active);});
    const panel=root.querySelector('.selection');panel.removeAttribute('data-selected');requestAnimationFrame(()=>panel.setAttribute('data-selected','true'));
    root.dataset.selected=id;
    position();
  }
  function reset(){
    selected=null;delete root.dataset.selected;
    $('selection-kicker').textContent='THE INTELLIGENCE AT THE CENTRE';$('selection-title').textContent='One AI nucleus. A connected product universe.';$('selection-description').textContent='BOIT’s domain-focused LLM, specialist agents, and AI orchestration connect industry context, execution, and human oversight across the portfolio.';
    $('selection-tags').replaceChildren(...['Domain LLM','Specialist agents','AI orchestration'].map(text=>{const el=document.createElement('span');el.textContent=text;return el;}));$('selection-link').href='/product#pillars';$('selection-link').textContent='Explore all 12 offerings';
    nodes.forEach((n,i)=>{n.classList.remove('selected');n.setAttribute('aria-pressed','false');wires[i].classList.remove('selected');pulses[i].classList.remove('selected');if(directory[i])directory[i].classList.remove('selected');});
    position();
  }
  $('nucleus-button').addEventListener('click',reset);
  function layout(){
    const rect=stage.getBoundingClientRect();width=rect.width;height=rect.height;
    $('nucleus-button').style.left=center.x/900*100+'%';$('nucleus-button').style.top=center.y/620*100+'%';
    /* Scale card width with stage; title size follows via CSS clamp + inline tweak. */
    const nodeW=mobile.matches
      ? Math.max(96, Math.min(132, width * 0.28))
      : Math.max(118, Math.min(168, width * 0.2));
    const titleFs=Math.max(7, Math.min(11, nodeW * 0.068));
    nodes.forEach(node=>{
      node.style.width=nodeW+'px';
      const title=node.querySelector('.node-title');
      if(title) title.style.fontSize=titleFs+'px';
    });
    position();
  }
  function position(){
    if(!width||!height)return;
    offerings.forEach((p,i)=>{
      const {x,y,depth}=orbitPoint(i,phase),active=p.id===selected;
      const scale=active?1.04:.93+(depth+1)*.055;
      nodes[i].style.transform='translate3d('+x/900*width+'px,'+y/620*height+'px,0) translate(-50%,-50%) scale('+scale.toFixed(3)+')';
      nodes[i].style.zIndex=String(active?70:depth>=0?30+Math.round(depth*10):5+Math.round((depth+1)*7));
      nodes[i].style.opacity=String(active?1:depth>=0?1:.65+(depth+1)*.15);
      nodes[i].dataset.plane=String(i%orbits.length);
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
  function animate(time){const delta=last?Math.min((time-last)/1000,.1):0;last=time;if(!isPaused()){phase+=delta*.105;position();}frame=requestAnimationFrame(animate);}
  const observer=new ResizeObserver(()=>{
    layout();
    if(typeof window.boitPostAtomSize==='function') window.boitPostAtomSize();
  });
  observer.observe(stage);layout();syncMotion();frame=requestAnimationFrame(animate);
  if(typeof window.boitPostAtomSize==='function'){
    window.boitPostAtomSize();
    [80,300,700].forEach(ms=>setTimeout(()=>window.boitPostAtomSize(),ms));
  }
  // Optional embedding API. The host can tear down animation when unmounting.
  root.boitUniverse={select,orbitPoint,center:{...center},offerings:offerings.map(p=>({...p})),destroy(){cancelAnimationFrame(frame);observer.disconnect();}};
})();
