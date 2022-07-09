// Import stylesheets
import './style.css';
import page from './home.html';
import jQuery from 'jquery';

let appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Specification Pattern</h1>`;

window.jQuery = jQuery;
window.$ = jQuery;

(function ($) {
  let o = $({});

  $.subscribe = function () {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function () {
    o.off.apply(o, arguments);
  };

  $.publish = function () {
    o.trigger.apply(o, arguments);
  };
})(jQuery);

//subscribe
function loadPage() {
  $('#stage').html(page);

  setTimeout(() => {
    let payload = {
      url: '',
      name: 'homepage',
    };

    $.publish('/page/loaded', [payload]);
  }, 200);
}

loadPage();
