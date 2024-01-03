import React, { useState } from "react";

// export default function Widget(props) {
//   const [song, setSong] = useState();

//   const clientId = "d8a48ebc251748cba27745d97f5cc149";
//   const client_secret = "3fe843a2b2304ca897696fbe0a57601f";

//   async function getToken() {
//     const result = await fetch("https://accounts.spotify.com/api/token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: "Basic " + btoa(clientId + ":" + client_secret),
//       },
//       body: "grant_type=client_credentials",
//     });

//     const data = await result.json();
//     const accessToken = data.access_token;
//     console.log(accessToken);
//     // getPlaylist(accessToken);
//   }
//   getToken();

// async function getPlaylist(accessToken) {
//   console.log(accessToken);
//   const spotifyEmbedUrl = await fetch(
//     `https://open.spotify.com/embed/track/${trackId}`,
//     {
//       method: "GET",
//       headers: { Authorization: "Bearer " + accessToken },
//     }
//   );
export default function SpotifyTrack() {
  const trackId = "078lbDGGTqBuTKU3bypXxQ";
  const spotifyEmbedUrl = `https://open.spotify.com/embed/track/${trackId}`;
  return (
    <iframe
      title="spotify"
      src={spotifyEmbedUrl}
      width="300"
      height="380"
      allowTransparency="true"
      allow="encrypted-media"
      className="spotify-container"
    />
  );
}
SpotifyTrack();
// const songData = await response.json();
// console.log(songData);
// const songUrl = songData.preview_url;
// setSong(songUrl);
// console.log(songUrl);
// player(accessToken);

// async function player(accessToken) {
//   const player = await fetch("https://api.spotify.com/v1/me/player", {
//     method: "GET",
//     headers: {
//       Authorization: "Bearer " + accessToken,
//     },
//   });

//   console.log(player);
// }

//   const [duration, setDuration] = useState("30s");
//   return (
//     <div className="spotifyWidget">
//       <iframe
//         title="track"
//         src={spotifyEmbedUrl}
//         width="300"
//         height="380"
//         allowTransparency="true"
//         allow="encrypted-media"
//         className="spotify-container"
//       />
//       {/* <iframe
//         title="spotifyPlugin"
//         src="https://open.spotify.com/embed/playlist/7nsVaUZVMnwi7bom2hSYMh?utm_source=generator&theme=0"
//         className="spotifyPlayer"
//         allowfullscreen=""
//         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//         loading="lazy"
//       ></iframe> */}
//     </div>
//   );
// }
