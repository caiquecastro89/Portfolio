// Cursor
var c=document.getElementById('cur'),r=document.getElementById('cur-ring'),mx=0,my=0,tx=0,ty=0;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;if(c){c.style.left=mx+'px';c.style.top=my+'px'}});
(function loop(){if(r){tx+=(mx-tx)*.15;ty+=(my-ty)*.15;r.style.left=tx+'px';r.style.top=ty+'px'}requestAnimationFrame(loop)})();
document.querySelectorAll('a,button,[onclick]').forEach(function(el){
  el.addEventListener('mouseenter',function(){document.body.classList.add('cur-hover')});
  el.addEventListener('mouseleave',function(){document.body.classList.remove('cur-hover')});
});

// Detect if we are on a case page
var isCase = document.body.dataset.page && document.body.dataset.page !== 'home';

// Nav scroll behavior
var lastY=0;
window.addEventListener('scroll',function(){
  var y=window.scrollY;
  document.getElementById('nav').classList.toggle('sc',y>20);
  // Mobile group
  var mobileGrp=document.getElementById('navMobileGroup');
  var desktopGrp=document.getElementById('navDesktopGroup');
  if(isCase){
    if(mobileGrp) mobileGrp.classList.add('visible');
    if(desktopGrp) desktopGrp.classList.add('visible');
  } else {
    var threshold=window.innerHeight*0.75;
    if(mobileGrp) mobileGrp.classList.toggle('visible',y>threshold);
    if(desktopGrp) desktopGrp.classList.toggle('visible',y>threshold);
  }
  lastY=y;
});

// On case pages, show nav CTAs immediately
if(isCase){
  document.addEventListener('DOMContentLoaded',function(){
    var mobileGrp=document.getElementById('navMobileGroup');
    var desktopGrp=document.getElementById('navDesktopGroup');
    if(mobileGrp) mobileGrp.classList.add('visible');
    if(desktopGrp) desktopGrp.classList.add('visible');
  });
}

// Scroll to section (for Work/About nav links on home)
function gt(id){
  var el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
}

// Reveal animations
function rev(){
  var els=document.querySelectorAll('.rv:not(.on)');
  var wh=window.innerHeight;
  els.forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.top<wh*0.92){el.classList.add('on')}
  });
}
window.addEventListener('scroll',rev,{passive:true});

// Video hover on cards
function initCardVideo(cardId,imgId){
  var card=document.getElementById(cardId);
  var imgWrap=document.getElementById(imgId);
  if(!card||!imgWrap) return;
  var video=imgWrap.querySelector('video');
  if(!video) return;
  card.addEventListener('mouseenter',function(){
    imgWrap.classList.add('playing');
    video.play().catch(function(){});
  });
  card.addEventListener('mouseleave',function(){
    imgWrap.classList.remove('playing');
    video.pause();
    video.currentTime=0;
  });
}

// Summary card toggle
document.querySelectorAll('.csummary-toggle').forEach(function(btn){
  btn.addEventListener('click',function(){
    var card=btn.closest('.csummary');
    card.classList.toggle('open');
  });
});

function initAllVideos(){
  if(window.innerWidth<=900) return;
  initCardVideo('wi-ion','wi-img-ion');
  initCardVideo('wi-ids','wi-img-ids');
  initCardVideo('wi-rite','wi-img-rite');
  initCardVideo('cnxt-ids-rite','wi-img-cnxt-ids-rite');
  initCardVideo('cnxt-rite-ion','wi-img-cnxt-rite-ion');
  initCardVideo('cnxt-ids-card','wi-img-cnxt-ids');
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',function(){
    initAllVideos();
    setTimeout(rev,50);
    setTimeout(rev,2400);
    setTimeout(rev,3200);
  });
} else {
  initAllVideos();
  setTimeout(rev,50);
  setTimeout(rev,2400);
  setTimeout(rev,3200);
}
