'use strict';


function updatePosition(pos) {
    
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    
    // https://maps.googleapis.com/maps/api/staticmap?center=12,24&zoom=13&size=300x300&sensor=false
    
    console.log('my geo location is:', lat, long);
}

function onError(error) {
    console.error('Could not get the geolocation.', error);
}

navigator.geolocation.watchPosition(updatePosition, onError);
