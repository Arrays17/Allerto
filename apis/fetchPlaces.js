import getDistanceUsingLatLng from '../utils/getDistanceUsingLatLng'

const apiKey =  process.env.GOOGLE_API_KEY
const URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?language=en&location='
const detailsURL = 'https://maps.googleapis.com/maps/api/place/details/json?fields=name,formatted_address,geometry/location,vicinity,formatted_phone_number&place_id='

export default fetchPlaces = (coordinates, keyword) => {
    let {latitude, longitude} = coordinates;
    const placesID = []

    return new Promise(function(resolve, reject){
        fetch(URL + `${latitude},${longitude}&rankby=distance&type=${keyword}&key=${apiKey}`)
        .then(res => res.json())
        .then(res => {
            for (let place of res.results){
                let id = place.place_id
                placesID.push(id)
            }

            const places = []
            
            placesID.map((id) => {
                fetch(detailsURL+`${id}&key=${apiKey}`)
                .then(res => res.json())
                .then(res => {
                    var place = {}
                    var lat = res.result.geometry.location.lat;
                    var lng = res.result.geometry.location.lng;
                    var coordinate = {
                    latitude: lat,
                    longitude: lng,
                    }
                    var distance = getDistanceUsingLatLng(latitude, longitude, lat, lng)
                    place['id'] = id
                    place['name'] = res.result.name
                    place['address'] = res.result.vicinity
                    place['number'] = res.result.formatted_phone_number
                    place['coordinate'] = coordinate
                    place['distance'] = distance

                    places.push(place)

                    if (placesID.length == places.length){
                        resolve(places) 
                    }
                })
            })
        })
    })
}

