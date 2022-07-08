import { Between } from 'spec-pattern';

import psp from './pubSubPattern2';

const rating = new Between(1, 5);

console.log(rating.isSatisfiedBy(3)); // true
console.log(rating.isSatisfiedBy(0)); // true

console.log('test');

// Import stylesheets
import './style.css';

let appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Specification Pattern</h1>`;

console.log(psp);

function pageLoaded(args) {
  console.log('pageload with args', args);

  psp.unsub(['/page/loaded'], true);
}

psp.sub('/page/loaded', pageLoaded);

let payload = { x: 0 };
psp.pub('/page/loaded', [payload]);

payload = { x: 1 };
psp.pub('/page/loaded', [payload]);
