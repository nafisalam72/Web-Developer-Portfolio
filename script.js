const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
if(menu) menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));

/* One-time typewriter: the words type once, then stay visible. */
const typeText=document.getElementById('typeText');
const words=['clean interfaces.','responsive websites.','smooth user experiences.','modern frontend UI.'];
let wi=0,ci=0,deleting=false;
function typeLoop(){
  if(!typeText)return;
  const word=words[wi];
  if(!deleting){
    typeText.textContent=word.slice(0,++ci);
    if(ci===word.length){deleting=true;setTimeout(typeLoop,1500);return}
  }else{
    typeText.textContent=word.slice(0,--ci);
    if(ci===0){deleting=false;wi=(wi+1)%words.length}
  }
  setTimeout(typeLoop,deleting?38:72);
}
setTimeout(typeLoop,650);

/* Scroll reveals happen once per element, with a slight stagger. */
const revealItems=[...document.querySelectorAll('.section,.four article,.project-card')];
revealItems.forEach((el,i)=>{
  el.style.opacity='0';
  el.style.transform='translateY(26px)';
  el.style.transition=`opacity .7s ${Math.min(i*55,280)}ms ease, transform .7s ${Math.min(i*55,280)}ms cubic-bezier(.2,.75,.2,1)`;
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='translateY(0)';
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealItems.forEach(el=>observer.observe(el));
