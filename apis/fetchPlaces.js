import React from 'react'


export default fetchPlaces = (coordinates, keyword) => {

    const latitude = coordinates.latitude;
    const longitude = coordinates.longitude;

    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + 
        '&rankby=distance' + 
        '&type=' + keyword + 
        '&key=' + process.env.GOOGLE_API_KEY;

    return (
        <div>
            
        </div>
    )
}

