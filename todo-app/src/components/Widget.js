export default function Widget() {

  const client_id = "d8a48ebc251748cba27745d97f5cc149"
  const client_secret = "3fe843a2b2304ca897696fbe0a57601f"
  
  async function getSong(){
    
    const accessToken = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",   
    headers:{
        'Authorization': client_id + ':' + client_secret.toString('base64')
      },
      body: {
        grant_type: 'client_credentials'
      }
    })

console.log(accessToken)
  //   let authOptions ={
  //     url: ,
  //   headers: {
  //     'Authorization': 'Basic'  + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
  //   },
  //   form: {
  //     grant_type: 'client_credentials'
  //   }, 
  //   json: true
  // };

  // request.post(authOptions, function(error, response, body){
  //   if (!error && response.statusCode === 200){
  //     let token = body.access_token;
  //     console.log(token)
  //   }
  // })
  
    // let accessToken =  localStorage.getItem("access_token")
    // console.log(accessToken)
    // const response = await fetch("https://api.spotify.com/v1/me")
    // console.log(response)
  }
  getSong()
  return (
    <div className="spotifyWidget">
      <h2>Widget</h2>
    </div>
  );
}
