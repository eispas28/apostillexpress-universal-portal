(function(){
var KEY='ax_flags',DKEY='ax_flags_defaults',BAKED={formatUpsell:true,showSignatures:false};
var DEFS=[
{k:'formatUpsell',label:'Add other format at payment',sub:'Add a paper or digital copy of an order from the payment page'},
{k:'showSignatures',label:'Notary Signatures',sub:'Payment page',def:true}
];
var FORCED=["copyThisOrder","smallBadges","saveDrafts","copyOrder","brbFees","noBoth","noInPersonReturn","uploadOnly","oneState","customerName"];
var subs=[];
function ck(k){var m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));return m?decodeURIComponent(m[1]):null;}
function sv(k,s){try{localStorage.setItem(k,s);}catch(e){}try{document.cookie=k+'='+encodeURIComponent(s)+';path=/;max-age=31536000;SameSite=None;Secure';}catch(e){}}
function rm(k){try{localStorage.removeItem(k);}catch(e){}try{document.cookie=k+'=;path=/;max-age=0;SameSite=None;Secure';}catch(e){}}
function ld(k){var s=null;try{s=localStorage.getItem(k);}catch(e){}if(s==null)s=ck(k);try{return JSON.parse(s)||{};}catch(e){return {};}}
function base(){var sd=ld(DKEY),r={};DEFS.forEach(function(d){r[d.k]=sd[d.k]!==undefined?!!sd[d.k]:BAKED[d.k]!==undefined?!!BAKED[d.k]:!!d.def;});return r;}
function read(){var o=ld(KEY),b=base(),r={};DEFS.forEach(function(d){r[d.k]=o[d.k]===undefined?b[d.k]:!!o[d.k];});FORCED.forEach(function(k){r[k]=true;});return r;}
function apply(v){document.documentElement.classList.toggle('ax-small-badges',!!v.smallBadges);}
function emit(){var v=read();apply(v);subs.forEach(function(f){try{f(v);}catch(e){}});}
window.AXFlags={defs:DEFS,saveDefault:function(){var v=read();sv(DKEY,JSON.stringify(v));sv(KEY,JSON.stringify(v));render();},resetToDefault:function(){rm(KEY);emit();render();},get:read,set:function(k,v){var o=read();o[k]=!!v;sv(KEY,JSON.stringify(o));emit();render();},onChange:function(f){subs.push(f);return function(){subs=subs.filter(function(x){return x!==f;});};}};
window.addEventListener('storage',function(e){if(e.key===KEY){emit();render();}});
var css='#axff-btn{position:fixed;left:1rem;bottom:1rem;z-index:2147483000;display:inline-flex;align-items:center;gap:var(--ax-space-2);background:#fff;color:#212529;border:1px solid #DEE2E6;border-radius:var(--ax-radius-full);padding:0.5625rem var(--ax-space-4);font:500 0.875rem Roboto,system-ui,sans-serif;cursor:pointer;box-shadow:0 4px 8px rgba(10,13,18,.1)}#axff-btn:hover{background:#F8F9FA}#axff-btn b{background:#0D5257;color:#fff;border-radius:var(--ax-radius-full);font-size:var(--ax-text-xs);padding:0.0625rem 0.4375rem}#axff-p{position:fixed;left:1rem;bottom:4rem;z-index:2147483000;width:21.25rem;max-width:calc(100vw - 2rem);background:#fff;border:1px solid #DEE2E6;border-radius:var(--ax-radius-xl);box-shadow:0 12px 24px rgba(10,13,18,.16);font-family:Roboto,system-ui,sans-serif;color:#212529}#axff-p h4{margin:0;padding:0.875rem 1.125rem;font-size:var(--ax-text-md);font-weight:600;border-bottom:1px solid #E9ECEF}#axff-p label{display:flex;align-items:flex-start;gap:var(--ax-space-3);padding:var(--ax-space-3) 1.125rem;cursor:pointer;border-bottom:1px solid #F1F3F5}#axff-p .axff-f{display:flex;gap:var(--ax-space-2);justify-content:flex-end;padding:var(--ax-space-3) 1.125rem;border-top:1px solid #E9ECEF}#axff-p .axff-f button{font:500 0.875rem Roboto,system-ui,sans-serif;padding:var(--ax-space-2) 0.875rem;border-radius:var(--ax-radius-md);border:1px solid #CED4DA;background:#fff;color:#212529;cursor:pointer}#axff-p .axff-f button.p{background:#0D5257;border-color:#0D5257;color:#fff}#axff-p .axff-f button:disabled{opacity:.5;cursor:default}#axff-p input{margin-top:0.1875rem;width:1.125rem;height:1.125rem;accent-color:#0D5257;flex-shrink:0}#axff-p span{font-size:0.9375rem;font-weight:500;line-height:1.3}#axff-p small{display:block;font-size:0.8125rem;font-weight:400;color:#6C757D;margin-top:var(--ax-space-0-5)}';
var open=false,btn,panel;
function render(){
if(!btn)return;var v=read(),b=base(),n=DEFS.filter(function(d){return v[d.k]!==!!d.def;}).length,dirty=DEFS.some(function(d){return v[d.k]!==b[d.k];});
btn.innerHTML='<i class="bi bi-flag"></i>Feature Flags'+(n?' <b>'+n+'</b>':'');
if(!open){panel.style.display='none';return;}
panel.style.display='block';
panel.innerHTML='<h4>Feature Flags</h4>'+DEFS.map(function(d){return '<label><input type="checkbox" data-k="'+d.k+'"'+(v[d.k]?' checked':'')+'><span>'+d.label+'<small>'+d.sub+'</small></span></label>';}).join('')+'<div class="axff-f"><button type="button" data-a="reset"'+(dirty?'':' disabled')+'>Reset</button><button type="button" data-a="save" class="p"'+(dirty?'':' disabled')+'>'+(dirty?'Save as default':'Saved as default')+'</button></div>';
}
function mount(){
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
btn=document.createElement('button');btn.id='axff-btn';btn.type='button';btn.style.display='none';
panel=document.createElement('div');panel.id='axff-p';panel.style.display='none';
document.body.appendChild(panel);document.body.appendChild(btn);
btn.addEventListener('click',function(){open=!open;render();});
panel.addEventListener('click',function(e){var a=e.target.getAttribute&&e.target.getAttribute('data-a');if(a==='save')window.AXFlags.saveDefault();if(a==='reset')window.AXFlags.resetToDefault();});
panel.addEventListener('change',function(e){var k=e.target.getAttribute&&e.target.getAttribute('data-k');if(k)window.AXFlags.set(k,e.target.checked);});
document.addEventListener('keydown',function(e){if((e.metaKey||e.ctrlKey)&&!e.altKey&&!e.shiftKey&&(e.key==='f'||e.key==='F')){e.preventDefault();btn.style.display='inline-flex';}else if(e.key==='Escape'&&btn.style.display!=='none'){btn.style.display='none';open=false;render();}});
render();
}
apply(read());
if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount);
})();
