import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container } from "./Contact.styles";
import { useParams } from "react-router-dom";
const Contact = () => {
  const { id } = useParams();
  return (
    <>
      <Container>
        <div className="img">
          <img src="" alt="profile picture" />
        </div>
        <div className="email">
          <h2>{`${id}@gmail.com`}</h2>
        </div>
        <div className="social-media">
          <div className="instagram handle">
            <a
              target="_blank"
              href="https://www.instagram.com"
              rel="noopner noreferrer"
            >
              Instagram
            </a>
            <InstagramIcon />
          </div>
          <div className="linkedin handle">
            <a
              target="_blank"
              href="https://www.linkedin.com"
              rel="noopner noreferrer"
            >
              Linkedin
            </a>
            <LinkedInIcon />
          </div>
          <div className="github handle">
            <a
              target="_blank"
              href="https://www.github.com"
              rel="noopner noreferrer"
            >
              Github
            </a>
            <GitHubIcon />
          </div>
          <div className="twitter handle">
            <a
              target="_blank"
              href="https://www.twitter.com"
              rel="noopner noreferrer"
            >
              Twitter
            </a>
            <TwitterIcon />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
