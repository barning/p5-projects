import p5 from 'p5';

let allSketches = [];

// import template from './sketches/template';
import sketch20180510 from './sketches/20180510';
import sketch20190516 from './sketches/20190516';
import sketch20190529 from './sketches/20190529';
import sketch20190531 from './sketches/20190531';

import medienfarben from './sketches/medienfarben';

import sketch20210104 from './sketches/20210104';
import sketch20210426 from './sketches/20210426';
import sketch20211214 from './sketches/20211214';

allSketches.push(
  // template,
  sketch20180510,
  sketch20190516,
  sketch20190529,
  sketch20190531,
  medienfarben,
  sketch20210104,
  sketch20210426,
  sketch20211214
);

allSketches.forEach(sketch => {
  new p5(sketch);
});


