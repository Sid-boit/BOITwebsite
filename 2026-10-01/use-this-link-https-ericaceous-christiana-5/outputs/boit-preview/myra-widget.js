(() => {
  const config = document.currentScript.dataset;
  const inCaseX = config.context === 'casex';
  const launcher = document.createElement('button');
  launcher.className = 'myra-launcher';
  launcher.type = 'button';
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.innerHTML = '<img src="assets/myra-portrait.jpg" alt=""><span><strong>Meet MIA</strong><small>My Interactive Agent · Demo</small></span><span aria-hidden="true">↗</span>';
  const panel = document.createElement('dialog');
  panel.className = 'myra-panel';
  panel.setAttribute('aria-labelledby', 'myra-title');
  panel.innerHTML = `<div class="myra-panel-head"><div><p>BOIT 2.0 / MY INTERACTIVE AGENT</p><h2 id="myra-title">${inCaseX ? 'MIA for CaseX' : 'Hi, I’m MIA.'}</h2></div><button class="myra-close" aria-label="Close MIA" type="button">×</button></div><div class="myra-media"><img class="myra-portrait" src="assets/myra-portrait.jpg" alt="MIA, BOIT’s proposed AI guide"><video controls playsinline preload="none" poster="assets/myra-portrait.jpg" hidden><source src="assets/mila-intro-demo.mp4" type="video/mp4"></video><span class="myra-mode">INTERFACE PREVIEW</span></div><div class="myra-panel-body"><p class="myra-welcome">${inCaseX ? 'Find the case. Bring the details together.' : 'Your guide to banking and insurance.'}</p><p class="myra-caption">${inCaseX ? 'MIA will help you locate ongoing cases, retrieve related transactions, and open a case-details window.' : 'MIA will help visitors explore BOIT’s products and solutions through natural conversation.'}</p><div class="myra-connection"><strong>Live conversation is not connected yet.</strong><span>${inCaseX ? 'This preview uses sample records. Live case access requires your CaseX integration and service setup.' : 'This preview shows the avatar interface. Live voice and facial animation require service setup.'}</span></div>${inCaseX ? '<button class="myra-sample myra-action" type="button">Open a sample case <span>↗</span></button>' : ''}<button class="myra-play myra-action secondary" type="button">Play original Mila introduction <span>▶</span></button><p class="myra-video-note" hidden>Recorded Mila introduction, supplied by you. This is not a live MIA response.</p><div class="myra-disabled"><button type="button" disabled>Start live conversation</button><span>Available after setup</span></div></div>`;
  document.body.append(launcher, panel);
  const video = panel.querySelector('video');
  const portrait = panel.querySelector('.myra-portrait');
  const show = () => { if (!panel.open) panel.showModal(); };
  launcher.addEventListener('click', show);
  document.querySelectorAll('[data-open-myra]').forEach(el => el.addEventListener('click', show));
  panel.querySelector('.myra-close').addEventListener('click', () => panel.close());
  panel.addEventListener('close', () => { video.pause(); video.hidden = true; portrait.hidden = false; panel.querySelector('.myra-video-note').hidden = true; panel.querySelector('.myra-mode').textContent = 'INTERFACE PREVIEW'; launcher.focus(); });
  panel.querySelector('.myra-play').addEventListener('click', async () => {
    portrait.hidden = true; video.hidden = false;
    panel.querySelector('.myra-video-note').hidden = false;
    panel.querySelector('.myra-mode').textContent = 'RECORDED INTRODUCTION';
    try { await video.play(); } catch { panel.querySelector('.myra-video-note').textContent = 'Use the video controls to play the recorded introduction.'; }
  });
  panel.querySelector('.myra-sample')?.addEventListener('click', () => {
    panel.close(); document.dispatchEvent(new Event('myra:open-sample-case'));
  });
})();
