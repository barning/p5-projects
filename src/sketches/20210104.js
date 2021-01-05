import returnRandomColor from '../helpers/colors';

export default function sketch(s) {
  let boids = [];
  const boidCount = 100;

  let lineCount = 0;

  const width = 500;
  const height = 500;

  s.setup = () => {
    s.createCanvas(width, height);

    for (let i = 0; i < boidCount; i++) {
      addBoid(s.random(0, width), s.random(0, height))
    }

    s.strokeWeight(3);
    s.strokeCap(s.ROUND);
  };

  s.draw = () => {  
    if (lineCount > 100) {
      s.noLoop();
    }
    drawLine();
  };

  function drawLine() {
    const nextboid = s.random(boids);
    const boid = s.random(boids);
    
    s.stroke(boid.color);
    s.line(boid.x, boid.y, nextboid.x, nextboid.y);  

    lineCount++;
  }

  function addBoid(x, y) {
    const obj = {};

    obj.x = x;
    obj.y = y;
    obj.color = returnRandomColor();

    boids.push(obj);
  }
}
