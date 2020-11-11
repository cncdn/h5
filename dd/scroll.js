$().ready(function() {
  document.getElementById('carousel_box').style.display = 'block';
  const carouse_speed = 30;
  const FGDemo = document.getElementById('carousel_content_box');
  if(FGDemo == null) {
    return;
  }
  const FGDemo1 = document.getElementById('carousel_content_1');
  const FGDemo2 = document.getElementById('carousel_content_2');

  function Marquee1() {
    if(FGDemo2.offsetHeight - FGDemo.scrollTop <= 0) {
      FGDemo.scrollTop -= FGDemo1.offsetHeight;
    } else {
      FGDemo.scrollTop++
    }
  }

  let MyMar1 = setInterval(Marquee1, carouse_speed);
  FGDemo.onmouseover = function() {
    clearInterval(MyMar1)
  };
  FGDemo.onmouseout = function() {
    MyMar1 = setInterval(Marquee1, carouse_speed)
  };
});
