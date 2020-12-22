export default function sketch(s) {
  var colors = [
    "#ef5350",
    "#ab47bc",
    "#42a5f5",
    "#26c6da",
    "#26a69a",
    "#66bb6a",
    "#9ccc65",
    "#ff7043"
  ];

  let previousMillis = 0;
  const interval = 100;
  let circle;

  const width = 500;
  const height = 500;

  s.setup = () => {
    s.createCanvas(width, height);
    s.background('#eceff1');
    circle = new Polygon(width / 2, height / 2, 200, 200);
    circle.display();
  }

  function Polygon(x, y, radius, npoints) {

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.points = npoints;

    this.angle = s.TWO_PI / this.points;
    this.sx;
    this.sy;

    this.display = function () {
      s.noFill();
      s.strokeWeight(2);
      s.stroke(s.random(colors));
      s.beginShape();
      for (var i = 0; i < s.TWO_PI; i += this.angle) {
        this.sx = x + s.cos(i) * this.radius;
        this.sy = y + s.sin(i) * this.radius;
        s.curveVertex(this.sx + s.randomGaussian(2, 3), this.sy + s.randomGaussian(2, 3));
      }
      s.endShape(s.CLOSE);
    };
  }
}