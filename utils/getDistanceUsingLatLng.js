import React from 'react';

function getDistanceUsingLatLng(lat1, lng1, lat2, lng2) {
    // Converting coordinates from degrees to radians
    var Lat1 = degToRad(lat1)
    var Lat2 = degToRad(lat2)
    var Lng1 = degToRad(lng1)
    var Lng2 = degToRad(lng2)

    // Using Haversine Formula
    const dLat = Lat2 - Lat1
    const dLng = Lng2 - Lng1
    const a = Math.pow(Math.sin(dLat/2), 2) + Math.cos(Lat1) * Math.cos(Lat2) * Math.pow(Math.sin(dLng/2), 2)
    const c = 2 * Math.asin(Math.sqrt(a))

    const Rkm = 6371                    // Radius of Earth in Kilometers
    const Rmiles = 3958.8               // Radius of Earth in Miles

    const dKm = c * Rkm                 // Distance in km
    const dMiles = c * Rmiles           // Distance in miles

    let distance = {
        kilometers: dKm.toFixed(1),     // Convert to 1 decimal place
        miles: dMiles.toFixed(1)
    }

    return (
        distance
    )
}

function degToRad (degree) {
    const pi = 355/113              // 3.1415929203539825
    const r = pi/180                // ratio of radians per 1 degree
    var rad = degree * r

    return rad
}



export default getDistanceUsingLatLng;