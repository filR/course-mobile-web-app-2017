'use strict';


function updatePosition(pos) {
    
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    
    
    let url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + long + '&zoom=13&size=300x300&sensor=false';
    $('.geo-preview').attr('src', url);
    
    
    console.log('my geo location is:', lat, long);
}

function onError(error) {
    console.error('Could not get the geolocation.', error);
}

navigator.geolocation.watchPosition(updatePosition, onError);
