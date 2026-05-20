// Detect if we are on a case page
var isCase = document.body.dataset.page && document.body.dataset.page !== 'home';

// Nav scroll behavior
window.addEventListener('scroll', function(){
  var y = window.scrollY;
  document.getElementById('nav').classList.toggle('sc', y > 20);
  var desktopGrp = document.getElementById('navDesktopGroup');
  if(!isCase && desktopGrp){
    var threshold = window.innerHeight * 0.75;
    desktopGrp.classList.toggle('visible', y > threshold);
  }
});

// On case pages, show nav CTAs immediately
if(isCase){
  document.addEventListener('DOMContentLoaded', function(){
    var desktopGrp = document.getElementById('navDesktopGroup');
    if(desktopGrp) desktopGrp.classList.add('visible');
  });
}

// Scroll to section
function gt(id){
  var el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
}

// Reveal animations using IntersectionObserver
var _revObserver = null;
function rev(){
  if(_revObserver) _revObserver.disconnect();
  var threshold = window.innerWidth <= 900 ? 0.05 : 0.08;
  _revObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('on');
        _revObserver.unobserve(entry.target);
      }
    });
  }, {threshold: threshold});
  document.querySelectorAll('.rv:not(.on)').forEach(function(el){
    _revObserver.observe(el);
  });
}

// Video hover on cards — preload video when card enters viewport
function initCardVideo(cardId, imgId){
  var card = document.getElementById(cardId);
  var imgWrap = document.getElementById(imgId);
  if(!card || !imgWrap) return;
  var video = imgWrap.querySelector('video');
  if(!video) return;
  var ready = false;

  // Preload video when card becomes visible
  var preloadObs = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting && !ready){
      video.load();
      ready = true;
      preloadObs.disconnect();
    }
  }, {rootMargin:'200px'});
  preloadObs.observe(card);

  card.addEventListener('mouseenter', function(){
    imgWrap.classList.add('playing');
    if(!ready){ video.load(); ready = true; }
    video.play().catch(function(){});
  });
  card.addEventListener('mouseleave', function(){
    imgWrap.classList.remove('playing');
    video.pause();
    video.currentTime = 0;
  });
}

// Summary card toggle
document.querySelectorAll('.csummary-toggle').forEach(function(btn){
  btn.addEventListener('click', function(){
    btn.closest('.csummary').classList.toggle('open');
  });
});

function initAllVideos(){
  if(window.innerWidth <= 900) return;
  initCardVideo('wi-cap','wi-img-cap');
  initCardVideo('wi-ion','wi-img-ion');
  initCardVideo('wi-ids','wi-img-ids');
  initCardVideo('wi-rite','wi-img-rite');
}

function scheduleRev(){
  setTimeout(rev, 100);
  setTimeout(rev, 400);
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', function(){ initAllVideos(); scheduleRev(); });
} else {
  initAllVideos();
  scheduleRev();
}
