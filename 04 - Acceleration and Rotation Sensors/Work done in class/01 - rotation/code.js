'use strict';

let element = document.querySelector('img');

window.addEventListener('deviceorientation', function(event) {
    console.log(event.alpha, event.beta, event.gamma);
    
    // android
    element.style.transform =
        `rotateY(${-event.gamma}deg)  
        rotateX(${event.beta}deg) 
        rotateZ(${event.alpha - 180}deg)`;
    
    // iPad
    element.style.transform =
        'rotateY(' + -event.beta + 'deg) ' + 
        'rotateX(' + -event.gamma + 'deg) ' +
        'rotateZ(' + (event.alpha - 180) + 'deg)';
});
