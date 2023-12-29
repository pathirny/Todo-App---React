export default function Widget() {

  const clientId = "d8a48ebc251748cba27745d97f5cc149"
  async function getSong(){
    let accessToken =  localStorage.getItem("access_token")
    console.log(accessToken)
    const response = await fetch("https://api.spotify.com/v1/tracks/6DK23fzeG32GDllJRfnDuz")
  }
  getSong()
  return (
    <div className="spotifyWidget">
      <h2>Widget</h2>
    </div>
  );
}
