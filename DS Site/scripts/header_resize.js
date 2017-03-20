function CalcVH() {
  var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  document.getElementById("top").setAttribute("style", "height:" + vH + "px");
}

var mq = window.matchMedia("(max-width: 768)");
if (mq.matches){
  CalcVH();
  window.addEventListener('onorientationchange', CalcVH, true);
}
