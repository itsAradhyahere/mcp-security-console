// ---- State: which defenses are implemented (drives every page) ----
let done=[1,3];try{done=JSON.parse(localStorage.getItem('done'))||done}catch(e){}
const save=()=>{try{localStorage.setItem('done',JSON.stringify(done))}catch(e){}};
const mit=r=>done.includes(r[5]);
const posture=()=>Math.round(R.filter(mit).length/R.length*100);
const $=s=>document.querySelector(s);
const tag=r=>`<span class="tag ${r[4]}">${r[4]}</span>`;
const ico=n=>`<span class="ico"><i data-lucide="${n}"></i></span>`;
const ring=p=>`<svg width="150" height="150" viewBox="-75 -75 150 150"><circle r="58" fill="none" stroke="var(--tile)" stroke-width="12"/><circle r="58" fill="none" stroke="url(#rg)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${3.644*p} 400" transform="rotate(-90)"/><defs><linearGradient id="rg"><stop offset="0" stop-color="#22c3e6"/><stop offset="1" stop-color="#2f6bff"/></linearGradient></defs><text text-anchor="middle" y="9" font-family="Sora" font-weight="700" font-size="28" fill="var(--navy)">${p}%</text></svg>`;
const riskRow=r=>`<a class="row" href="#risk-${r[0].toLowerCase()}">${ico(r[1])}<div style="flex:1"><b>${r[0]} – ${r[2]}</b><div>${r[3]}</div></div>${tag(r)}</a>`;
// ---- Pages ----
const pages={
dashboard(){const open=R.filter(r=>!mit(r)),sev=s=>R.filter(r=>r[4]==s).length;
 return `<h1>Security overview</h1><p class="sub">Posture of the AI agent and its MCP connections, calculated from the defenses you have implemented.</p>
 <div class="g c4"><div class="p kpi"><span><i data-lucide="shield-alert"></i>Risk categories</span><b>${R.length}</b></div><div class="p kpi"><span><i data-lucide="network"></i>Connected systems</span><b>${Object.keys(N).length}</b></div><div class="p kpi"><span><i data-lucide="layers"></i>Defenses in place</span><b>${done.length}/${D.length}</b></div><div class="p kpi"><span><i data-lucide="triangle-alert"></i>Open risks</span><b class="${open.length?'High':'ok'}">${open.length}</b></div></div>
 <div class="g c2" style="margin-top:16px"><div class="p" style="display:flex;gap:24px;align-items:center">${ring(posture())}<div style="flex:1"><h2>Security posture</h2><p>${R.length-open.length} of ${R.length} risks are covered by an implemented defense.</p>${['Critical','High','Medium'].map(s=>`<div style="margin-top:10px"><span class="${s}"><b>${s}</b></span> · ${sev(s)} risks<div class="bar"><i style="width:${sev(s)*10}%"></i></div></div>`).join('')}<a class="btn" style="margin-top:14px" href="#defense">Improve posture</a></div></div>
 <div class="p"><h2>Highest-priority open risks</h2>${open.sort((a,b)=>'Critical High Medium'.indexOf(a[4])-'Critical High Medium'.indexOf(b[4])).slice(0,4).map(riskRow).join('')||'<p>All risks are covered.</p>'}</div></div>`},
risks(){return `<h1>Risk register</h1><p class="sub">The ten MCP risk categories, with severity and mitigation status.</p>
 <div class="tools"><input id="q" placeholder="Search risks…"><select id="f"><option value="">All severities</option><option>Critical</option><option>High</option><option>Medium</option></select></div><div class="g c3" id="rl"></div>`},
risk(id){const r=R.find(x=>x[0].toLowerCase()==id);if(!r)return pages.risks();const d=D[r[5]];
 return `<a class="back" href="#risks"><i data-lucide="arrow-left" style="width:16px"></i>Risk register</a>
 <div style="display:flex;gap:14px;align-items:center;margin-bottom:18px">${ico(r[1])}<div><h1 style="font-size:22px">${r[0]} – ${r[2]}</h1><p>${r[3]}</p></div></div>
 <div class="g c2"><div class="p"><div class="box"><small>SEVERITY (ILLUSTRATIVE)</small><div>${tag(r)}</div></div><div class="box"><small>HOW IT HAPPENS</small><div>${r[7]}</div></div><div class="box"><small>RECOMMENDED MITIGATION</small><div>${r[8]}</div></div><div class="box"><small>AFFECTED SYSTEMS</small><div>${r[6].map(n=>`<a class="chip" href="#architecture">${N[n][0]}</a>`).join('')}</div></div></div>
 <div class="p"><h2>Defense that contains it</h2><div style="display:flex;gap:14px;align-items:center">${ico(d[1])}<div style="flex:1"><b style="color:var(--navy)">${d[0]}</b><div class="${mit(r)?'ok':'High'}">${mit(r)?'Implemented':'Not implemented yet'}</div></div><div class="sw ${mit(r)?'on':''}" data-d="${r[5]}" role="switch" tabindex="0"></div></div><p style="margin-top:14px">Switching it on updates the posture score on every page.</p></div></div>`},
architecture(){return `<h1>Agent architecture</h1><p class="sub">Select a connected system to see the risks that reach the agent through it.</p>
 <div class="g c2" style="grid-template-columns:680px 1fr"><div class="p"><div class="arch"><svg class="ln" viewBox="0 0 640 520"><defs><radialGradient id="h"><stop offset="0" stop-color="#60a5fa" stop-opacity=".4"/><stop offset="1" stop-color="#60a5fa" stop-opacity="0"/></radialGradient></defs><circle cx="320" cy="260" r="190" fill="url(#h)"/>${Object.values(N).map(n=>`<line x1="320" y1="260" x2="${n[2]}" y2="${n[3]}" stroke="var(--blue)" stroke-opacity=".4"/>`).join('')}<circle cx="320" cy="260" r="115" fill="none" stroke="var(--blue)" stroke-opacity=".4" stroke-dasharray="3 7"><animateTransform attributeName="transform" type="rotate" from="0 320 260" to="360 320 260" dur="60s" repeatCount="indefinite"/></circle><g transform="translate(320,262) scale(.62)"><path d="M0 -104C34 -82 70 -74 96 -72C96 10 76 70 0 112C-76 70 -96 10 -96 -72C-70 -74 -34 -82 0 -104Z" fill="var(--tile)" stroke="var(--blue)" stroke-width="7"/></g></svg><div class="ag"><i data-lucide="bot" style="width:36px;height:36px;display:block;margin:0 auto 2px;color:var(--blue)"></i>AI Agent</div>
 ${Object.entries(N).map(([k,n])=>`<button class="nd" data-n="${k}" style="left:${n[2]}px;top:${n[3]}px">${ico(n[1])}<i class="cnt">${R.filter(r=>r[6].includes(k)).length}</i>${n[0]}</button>`).join('')}</div></div><div class="p" id="np"><h2>Connected system</h2><p>Select a node to inspect it.</p></div></div>`},
defense(){return `<h1>Defense-in-depth</h1><p class="sub">Mark each defense as implemented. Every MCP interaction flows through User → Agent → MCP Server → Tools → External Systems → Response, with these controls applied at every stage.</p>
 <div class="g c2" style="grid-template-columns:1.4fr 1fr"><div class="p">${D.map((d,i)=>`<div class="row" style="cursor:default">${ico(d[1])}<div style="flex:1"><b>${i+1}. ${d[0]}</b><div>Covers ${R.filter(r=>r[5]==i).map(r=>`<a class="chip" href="#risk-${r[0].toLowerCase()}">${r[0]}</a>`).join('')||'general hardening'}</div></div><div class="sw ${done.includes(i)?'on':''}" data-d="${i}" role="switch" tabindex="0" aria-label="${d[0]}"></div></div>`).join('')}</div>
 <div class="p" style="text-align:center;align-self:start"><h2>Posture</h2>${ring(posture())}<p style="margin-top:10px">${done.length} of ${D.length} defenses implemented</p><a class="btn" style="margin-top:12px" href="#dashboard">View dashboard</a></div></div>`}};
// ---- Router + events ----
function go(){const h=(location.hash||'#dashboard').slice(1);let k=h.split('-')[0];if(!pages[k])k='dashboard';
 $('#v').innerHTML=k=='risk'?pages.risk(h.slice(5)):pages[k]();
 document.querySelectorAll('aside a').forEach(a=>a.classList.toggle('on',a.dataset.r==(k=='risk'?'risks':k)));
 if(k=='risks')list();scrollTo(0,0);try{lucide.createIcons()}catch(e){}}
function list(){const q=$('#q').value.toLowerCase(),f=$('#f').value;
 $('#rl').innerHTML=R.filter(r=>(!f||r[4]==f)&&(r[0]+r[2]+r[3]).toLowerCase().includes(q)).map(r=>`<a class="p rc" href="#risk-${r[0].toLowerCase()}"><div style="display:flex;justify-content:space-between;align-items:center">${ico(r[1])}${tag(r)}</div><h3>${r[0]} – ${r[2]}</h3><p>${r[3]}</p><p class="${mit(r)?'ok':'High'}" style="margin-top:8px;font-weight:500">${mit(r)?'Mitigated':'Open'} · ${D[r[5]][0]}</p></a>`).join('')||'<p>No risks match.</p>';try{lucide.createIcons()}catch(e){}}
document.addEventListener('input',e=>{if(e.target.id=='q')list()});
document.addEventListener('change',e=>{if(e.target.id=='f')list()});
document.addEventListener('click',e=>{const s=e.target.closest('.sw');if(s){const i=+s.dataset.d;done=done.includes(i)?done.filter(x=>x!=i):[...done,i];save();go();return}
 const n=e.target.closest('.nd');if(n){const k=n.dataset.n;document.querySelectorAll('.nd').forEach(x=>x.classList.toggle('on',x==n));const rs=R.filter(r=>r[6].includes(k));
 $('#np').innerHTML=`<h2>${N[k][0]}</h2><p style="margin-bottom:10px">${rs.length} risk${rs.length==1?'':'s'} reach the agent through this system.</p>${rs.map(riskRow).join('')}`;try{lucide.createIcons()}catch(e){}}});
document.addEventListener('keydown',e=>{if((e.key=='Enter'||e.key==' ')&&e.target.classList.contains('sw')){e.preventDefault();e.target.click()}});
$('#th').onclick=()=>{const d=document.documentElement,dk=matchMedia('(prefers-color-scheme:dark)').matches,c=d.dataset.theme||(dk?'dark':'light');d.dataset.theme=c=='dark'?'light':'dark'};
addEventListener('hashchange',go);go();
// ---- Command palette (Ctrl/Cmd + K) ----
const cp=document.createElement('div');cp.id='cp';cp.hidden=true;cp.innerHTML='<div class="p"><input id="ci" placeholder="Jump to a page or risk…"><div id="cl"></div></div>';document.body.appendChild(cp);
const items=[['Dashboard','#dashboard'],['Risk register','#risks'],['Agent architecture','#architecture'],['Defense-in-depth','#defense'],...R.map(r=>[r[0]+' – '+r[2],'#risk-'+r[0].toLowerCase()])];
function cl(){const q=$('#ci').value.toLowerCase();$('#cl').innerHTML=items.filter(i=>i[0].toLowerCase().includes(q)).slice(0,8).map((i,k)=>`<a class="ci${k?'':' s'}" href="${i[1]}">${i[0]}</a>`).join('')}
function op(o){cp.hidden=!o;if(o){$('#ci').value='';cl();$('#ci').focus()}}
$('#ci').oninput=cl;cp.onclick=e=>{if(e.target==cp||e.target.closest('.ci'))op(false)};
$('#ci').onkeydown=e=>{if(e.key=='Enter'){const a=$('#cl .ci');if(a){location.hash=a.getAttribute('href');op(false)}}};
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()=='k'){e.preventDefault();op(true)}if(e.key=='Escape')op(false)});
$('#th').insertAdjacentHTML('beforebegin','<button id="ck">Quick jump · Ctrl K</button>');$('#ck').onclick=()=>op(true);
// ---- Simulated live threat feed: each event is blocked only if its defense is switched on ----
let evs=[],paused=false,st={b:0,x:0};
document.body.insertAdjacentHTML('beforeend','<div id="feed" class="p"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span class="dot"></span><b style="color:var(--navy);flex:1">Live threat feed (simulated)</b><button id="pz" class="btn" style="padding:3px 10px">Pause</button></div><div style="font-size:12px;margin-bottom:4px"><span class="ok">Blocked <b id="sb">0</b></span> · <span class="Critical">Breaches <b id="sx">0</b></span></div><div id="fl"></div></div>');
$('#pz').onclick=()=>{paused=!paused;$('#pz').textContent=paused?'Resume':'Pause'};
function fire(r,ok){const a=document.querySelector('.arch svg.ln');if(!a)return;const n=N[r[6][0]],c=ok?'#12e0a0':'#ff4d5a';
 a.insertAdjacentHTML('beforeend',`<g><circle r="6" fill="${c}"><animateMotion dur="1s" path="M${n[2]} ${n[3]}L320 260" fill="freeze"/><animate attributeName="opacity" values="1;1;0" begin="0.9s" dur=".1s" fill="freeze"/></circle><circle cx="320" cy="260" r="20" opacity="0" fill="none" stroke="${c}" stroke-width="3"><animate attributeName="r" from="20" to="125" begin="1s" dur=".7s" fill="freeze"/><animate attributeName="opacity" values="0;1;0" begin="1s" dur=".7s" fill="freeze"/></circle></g>`);
 const g=a.lastElementChild;setTimeout(()=>g.remove(),2000)}
function sim(){if(paused)return;const r=R[Math.random()*R.length|0],ok=mit(r);st[ok?'b':'x']++;
 evs.unshift({t:new Date().toLocaleTimeString([],{hour12:false}),r,ok});evs=evs.slice(0,5);
 $('#fl').innerHTML=evs.map(e=>`<a class="ev ${e.ok?'ok':'Critical'}" href="#risk-${e.r[0].toLowerCase()}"><i>${e.t}</i><b>${e.r[0]}</b> ${e.ok?'blocked by '+D[e.r[5]][0]:'breach – '+D[e.r[5]][0]+' not implemented'}</a>`).join('');
 $('#sb').textContent=st.b;$('#sx').textContent=st.x;fire(r,ok)}
sim();setInterval(sim,2300);
// ---- Count-up KPIs and radar sweep on the architecture view ----
new MutationObserver(()=>{
 document.querySelectorAll('.kpi b').forEach(b=>{if(!/^\d+$/.test(b.textContent))return;const t=+b.textContent,s=performance.now();(function f(n){const k=Math.min(1,(n-s)/900);b.textContent=Math.round(t*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(s)});
 const a=document.querySelector('.arch svg.ln');if(a&&!a.querySelector('.rd'))a.insertAdjacentHTML('afterbegin','<g class="rd"><animateTransform attributeName="transform" type="rotate" from="0 320 260" to="360 320 260" dur="6s" repeatCount="indefinite"/><path d="M320 260L510 260A190 190 0 0 0 454 126Z" fill="#22c3e6" fill-opacity=".18"/><line x1="320" y1="260" x2="510" y2="260" stroke="#22c3e6" stroke-opacity=".8"/></g>');
}).observe($('#v'),{childList:true});
go();
