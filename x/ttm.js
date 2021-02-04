cx = document.getElementById('m1');
ctx = cx.getContext("2d", {alpha:false});
function init()
{
  alert('hi');
  ctx.fillStyle = "#f00";
  ctx.fillRect(120,120,20,20);
}

init();
