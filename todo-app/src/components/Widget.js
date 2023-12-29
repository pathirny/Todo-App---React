export default function Widget() {

  const clientId = "d8a48ebc251748cba27745d97f5cc149"
  const client_secret = "3fe843a2b2304ca897696fbe0a57601f"
  
 const getToken = async () =>{
      
     const result = await fetch("https://accounts.spotify.com/api/token", {
     method: "POST",   
     headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + client_secret)
       },
       body: 'grant_type=client_credentials'
     })

     const data = await result.json()
     console.log(data)
     const accessToken = data.access_token
     console.log(accessToken)
    }

    getToken()

  // return (
  //   <div className="spotifyWidget">
  //     <h2>Widget</h2>
  //   </div>
  // );
}
