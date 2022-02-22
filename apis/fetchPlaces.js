import React from 'react'


export default fetchPlaces = (coordinates, keyword) => {

    const {lat, long} = coordinates;

    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + 
        '&rankby=distance' + 
        '&type=' + keyword + 
        '&key=' + process.env.GOOGLE_API_KEY;

    return (
        <div>
            
        </div>
    )
}

