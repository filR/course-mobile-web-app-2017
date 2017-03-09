'use strict';

let lastLat;
let lastLong;
let distance = 0;

function updatePosition(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    
    console.log('my geo location is:', lat, long);
    
    
    // centre map on position
    map.setCenter({
        lat: lat,
        lng: long
    });
    
    // draw marker
    new google.maps.Marker({
        map: map,
        position: {
            lat: lat,
            lng: long
        },
        icon: 'marker.png'
    });
    
    
    // if last position is set
    if (lastLat && lastLong) {
           
        // draw line
        new google.maps.Polyline({
            map: map,
            path: [
                { lat: lastLat, lng: lastLong },
                { lat: lat, lng: long },
            ],
            geodisc: true,
            strokeColor: "#FF0000",
            strokeWidth: 4
        });

        // update distance
        distance += calcDistance(lat, long, lastLat, lastLong);
        console.log('total distance:', distance, 'm');
    }
    
    
    
    
    // draw static google image
//    let url = 'https://maps.googleapis.com/maps/api/staticmap?center=' +
//        lat + ',' + long +
//        '&zoom=13&size=300x300&sensor=false';
//    $('.geo-preview').attr('src', url);
    
    
    // save current position as "last position:"
    lastLat = lat;
    lastLong = long;    
}

function onError(error) {
    console.error('Could not get the geolocation.', error);
}

navigator.geolocation.watchPosition(updatePosition, onError);


// calculate the distance between two points
function calcDistance(lat1, long1, lat2, long2) {
    let p1 = new google.maps.LatLng(lat1, long1);
    let p2 = new google.maps.LatLng(lat2, long2);
    
    let dist = google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
    return dist;
}




let map = new google.maps.Map($('#map')[0], {
    center: { lat: -34.397, lng: 150.644 },
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 15
});

