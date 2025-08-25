
(function(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);}}
  },{threshold:0.12});
  els.forEach(el=>io.observe(el));
  const hero = document.querySelector('header.hero');
  if(hero){
    window.addEventListener('scroll', ()=>{
      const y = window.scrollY;
      hero.style.backgroundPositionY = (y*0.4)+'px';
    }, {passive:true});
  }
})();
