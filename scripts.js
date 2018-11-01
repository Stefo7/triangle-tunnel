var canvas = document.getElementById('myCanvas');

var line = canvas.getContext('2d');
var a = 50;
var b = 30;
var c = 70;
var d = 5;
var e = 90;
var f = 30;

// the triangle

function draw() {
line.beginPath();
line.moveTo(a,b);
line.lineTo(c,d);
line.lineTo(e,f);
line.closePath();
line.stroke();
}

draw();

for (var i=0; i<30; i++) {
  a += 5;
  b += 3;
  c += 5;
  d += 3;
  e += 5;
  f += 3;
  draw();
}