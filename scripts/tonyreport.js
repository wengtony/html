
function drawRainbow(rad){
  if(rad>40) rad = 40;
  if(rad<15) rad = 15;
  var cns = document.getElementById('canvas');
  var ctx = cns.getContext('2d');
  ctx.lineWidth = 4;
  ctx.strokeStyle = "rgb(16,67,201)";
  ctx.translate(216, 175);
  ctx.restore();
  ctx.save();
  ctx.clearRect(-105, -105, 300, 300);

  var ip = 2.5;
  var ir = 15.0;
  var st = 7.0;
  var j=(Math.PI / 180) * ((rad-ir)*st+ip);
  ctx.rotate( j);

  ctx.beginPath();
  ctx.moveTo(-130, 0);
  ctx.lineTo(10, 0);
  ctx.stroke();
  ctx.restore();
  ctx.save();
}
