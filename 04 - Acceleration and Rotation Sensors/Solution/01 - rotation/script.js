'use strict';

window.addEventListener('deviceorientation', function(event) {
    // console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
    
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Using_device_orientation_with_3D_transforms
    document.querySelector('img').style.transform =
        `rotateY(${ -event.gamma }deg)
         rotateX(${ event.beta }deg)
         rotateZ(${ event.alpha - 180 }deg)`;
});
