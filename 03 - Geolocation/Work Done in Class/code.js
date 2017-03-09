'use strict';

let lastLat;
let lastLong;
let lastTime;
let distance = 0;
let speed = 0;

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
        distance = Math.round(distance); // remove decimal places
        console.log('total distance:', distance, 'm');
        
        // current speed
        speed = calcSpeed();
        console.log('current speed is', speed);
    }
    
    
    updateHTML(lat, long, distance);
    
    
    // draw static google image
//    let url = 'https://maps.googleapis.com/maps/api/staticmap?center=' +
//        lat + ',' + long +
//        '&zoom=13&size=300x300&sensor=false';
//    $('.geo-preview').attr('src', url);
    
    
    // save current position as "last position:"
    lastLat = lat;
    lastLong = long;
    lastTime = Date.now();
}

function onError(error) {
    console.error('Could not get the geolocation.', error);
}

navigator.geolocation.watchPosition(updatePosition, onError);


// update data on page
function updateHTML(lat, long, distance) {
    
    lat = Math.round(lat * 100) / 100; // round to two decimal points
    $('#lat').text(lat);
    
    long = Math.round(long * 100) / 100;
    $('#long').text(long);
    $('#dist').text(distance);
}



// calculate the distance between two points
function calcDistance(lat1, long1, lat2, long2) {
    let p1 = new google.maps.LatLng(lat1, long1);
    let p2 = new google.maps.LatLng(lat2, long2);
    
    let dist = google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
    return dist;
}


// calculate current speed
function calcSpeed(lat1, long1, time1, lat2, long2, time2) {
    let distance = calcDistance(lat1, long1, lat2, long2);
    let duration = time2 - time1;
    
    let speed = distance / duration;
    return speed;
}



let map = new google.maps.Map($('#map')[0], {
    center: { lat: -34.397, lng: 150.644 },
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 15
});

