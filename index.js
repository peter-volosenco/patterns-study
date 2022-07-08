// Import stylesheets
import './style.css';

// import { Between } from 'spec-pattern';

// const rating = new Between(1, 5);

// console.log(rating.isSatisfiedBy(3)); // true
// console.log(rating.isSatisfiedBy(0)); // true

// console.log('test');

import psp from './pubSubPattern2';

let appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Specification Pattern</h1>`;

console.log(psp);

//subscribe
function pageLoaded(args) {
  // psp.unsub('/page/loaded', pageLoaded);

  console.log('pageload with args', args);
}

let handle = psp.sub('/page/loaded', pageLoaded);
console.log('handle>', handle);

//publish
let payload = { x: 0 };
psp.pub('/page/loaded', [payload]);

payload = { x: 1 };
psp.pub('/page/loaded', [payload]);

//unsubscribe
psp.unsub(handle, true);
