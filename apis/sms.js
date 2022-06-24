
export const sendMessage = async (sender, recipient, location) => {
    const {latitude, longitude} = location
    const messageContent = "Allerto App user with phoneNo" + sender + " wants to share their location with you." +
        " Their current location: maps.google.com/?q=" + latitude + "," + longitude

    fetch(`https://allerto-server.herokuapp.com/send-text?recipient=${recipient}&messageContent=${messageContent}`)
        .then(()=> {
            console.log("SMS Sent")
        })
        .catch((err) => {
            console.warn("Sending SMS Error:", err)
        })
}


