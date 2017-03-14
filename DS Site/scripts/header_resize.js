function CalcVH() {
  var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  document.getElementById("top").setAttribute("style", "height:" + vH + "px");
}

CalcVH();
window.addEventListener('onorientationchange', CalcVH, true);
