'use strict';


function handleMotionEvent (event) {
    
    console.log(event.acceleration);
    console.log(event.accelerationIncludingGravity);
    
};

window.addEventListener('devicemotion', handleMotionEvent)
