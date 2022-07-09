// Import stylesheets
import './style.css';
import psp from './pubSubPattern2';
import page from './home.html';

let appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Specification Pattern</h1>`;

window.psp = psp;

//subscribe
function loadPage() {
  let stage = document.getElementById('stage');
  stage.innerHTML = page;
}

loadPage();
