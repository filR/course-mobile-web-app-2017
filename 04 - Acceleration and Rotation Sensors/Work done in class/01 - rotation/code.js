'use strict';

let element = document.querySelector('img');

window.addEventListener('deviceorientation', function(event) {
    console.log(event.alpha, event.beta, event.gamma);
});
