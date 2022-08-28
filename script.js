const c = document.getElementById('canvas').getContext('2d')

c.fillStyle = 'black';
c.strokeRect(0, 0, 500, 400);

c.fillStyle = 'black';
c.fillRect(0, 0, 500, 400);

c.fillStyle = "grey";
var n = 1600;
var size = 20;
var w = c.canvas.width;
var h = c.canvas.height;

var starx = (w - size) * Math.random();
var stary = (h - size) * Math.random();
fillStar(starx, stary, size);
c.fillStyle = "blue"

for (var i = 0; i < n; i = i + 1) {
  var x = (w - size) * Math.random();
  var y = (h - size) * Math.random();
  fillStar(x, y, size);
}

var giveup = document.getElementbyId("one")

giveup.onclick = function() {
  c.fillStyle("gray")
  fillStar(starx, stary, size)
}

function fillStar(x, y, s) {
  c.beginPath();
  c.moveTo(x, y + s * 0.4);
  c.lineTo(x + s, y + s * 0.4);
  c.lineTo(x + s * 0.15, y + s * 0.9);
  c.lineTo(x + s / 2, y);
  c.lineTo(x + s * 0.85, y + s * 0.9);
  c.lineTo(x, y + s * 0.4);
  c.fill();
}