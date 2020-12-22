import p5 from 'p5';

let allSketches = [];

// import template from './sketches/template';
import sketch100518 from './sketches/100518';
import sketch160519 from './sketches/160519';
import sketch290519 from './sketches/290519';
import sketch310519 from './sketches/310519';

import medienfarben from './sketches/medienfarben';

allSketches.push(
  // template,
  sketch100518,
  sketch160519,
  sketch290519,
  sketch310519,
  medienfarben
);

allSketches.forEach(sketch => {
  new p5(sketch);
});


