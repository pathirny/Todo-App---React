import Widget from "./Widget";
import SpotifyTrack from "./Widget";
// declare the header components

// this will return:
// spotify widget
//"ToDo"- text

export default function Header(props) {
  // declare the props (signout function)
  const signOut = props.signout;

  return (
    <header>
      <SpotifyTrack />
      <h2>ToDo App</h2>
      <button onClick={signOut}>Sign Out</button>
    </header>
  );
}
