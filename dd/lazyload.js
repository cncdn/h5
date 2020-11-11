function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  const padding = 650
  const vh = window.innerHeight + padding
  return (
    bounding.top >= -padding && bounding.top <= vh) || (
    bounding.bottom >= -padding && bounding.bottom <= (vh + bounding.height)
  )
}
function replaceImgSrc(img) {
  img.src = img.dataset.src;
  img.classList.remove('lazyload')
}
function isImageNeedLoad(img) {
  return !!(isInViewport(img) && img.dataset.src && img.src.replace(/^.*\/(.*$)/, '$1') != img.dataset.src.replace(/^.*\/(.*$)/, '$1'));
}
function rendered() {
  const lazyImages = [...document.querySelectorAll('.lazyload')]
  const f = function() {
    if(lazyImages.length === 0) {
      return
    }
    const inx = lazyImages.findIndex(img => isImageNeedLoad(img))
    if(inx === -1) {
      return
    }
    replaceImgSrc(lazyImages.splice(inx, 1)[0])
  }
  for (let i = 0 ; i < lazyImages.length && i < 5; i++){
    f(lazyImages[i])
  }
  setInterval(f, 30)
}
// $().ready()
window.addEventListener('DOMContentLoaded', function() {
  rendered()
  document.querySelectorAll(`[href*="#mflq"]`).forEach(a => {
    a.addEventListener('click', function(e){
      window.scrollTo(0,document.body.scrollHeight);
      setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)}, 500)
    })
  })
})

