import * as Location from 'expo-location'

const apiKey = process.env.GOOGLE_API_KEY

export default getAddress = async (coordinates) => {
    let latitude = coordinates.latitude 
    let longitude = coordinates.longitude

    Location.setGoogleApiKey(apiKey)

    let place = await Location.reverseGeocodeAsync({latitude,longitude})
    console.log("Lat: " + latitude)
    console.log("Lng: " + longitude)


    if (place[0]) {
        let address = place[0].name + ' ' + place[0].street + ', ' +place[0].city + ' City, ' + place[0].region + ', ' + place[0].isoCountryCode 
        console.log(address)
        return address
    }
}