'use strict';


function updatePosition(pos) {
    console.log('my geo location is:', pos);
}

navigator.geolocation.watchPosition(updatePosition);
