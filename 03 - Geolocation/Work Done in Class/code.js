'use strict';


function updatePosition(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    
    console.log('my geo location is:', lat, long);
    
    // draw static google image
//    let url = 'https://maps.googleapis.com/maps/api/staticmap?center=' +
//        lat + ',' + long +
//        '&zoom=13&size=300x300&sensor=false';
//    $('.geo-preview').attr('src', url);
    
    
}

function onError(error) {
    console.error('Could not get the geolocation.', error);
}

navigator.geolocation.watchPosition(updatePosition, onError);



let map = new google.maps.Map($('#map')[0], {
    center: {lat: -34.397, lng: 150.644},
    mapTypeId: google.maps.MapTypeId.SATELITE,
    zoom: 15
});

