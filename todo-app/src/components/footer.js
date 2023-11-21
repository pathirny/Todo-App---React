import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// declare the footer component
export default function Footer() {
  return (
    <footer>
      <h3>Created By Patryk Hirny</h3>
      <article className="socials">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </article>
    </footer>
  );
}
