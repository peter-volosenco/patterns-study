import { Between } from 'spec-pattern';

const rating = new Between(1, 5);

console.log(rating.isSatisfiedBy(3)); // true
console.log(rating.isSatisfiedBy(0)); // true

console.log('test');

// Import stylesheets
import './style.css';

let appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Specification Pattern</h1>`;
