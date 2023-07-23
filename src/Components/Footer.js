import "./Footer.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-links-wrapper">
        <a className="footer-links" href="/" target="_blank">
          Facebook
        </a>
        <a className="footer-links" href="/" target="_blank">
          Instagram
        </a>
        <a className="footer-links" href="/" target="_blank">
          Github
        </a>
        <a className="footer-links" href="/" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export const WebFooter = () => {
  return (
    <div className="webfooter-wrapper">
      <div className="webfooter-links-wrapper">
    
        <a className="webfooter-links" href="https://github.com/parvejg/e-commerce-app-" target="_blank">
          <FaGithub />
        </a>
        <a className="webfooter-links" href="https://www.linkedin.com/in/md-parvez-6b6a5a259" target="_blank">
          <AiFillLinkedin />
        </a>
        <a className="webfooter-links" href="https://instagram.com/parvez321pg/" target="_blank">
          <RiInstagramFill />
        </a>
      </div>
    </div>
  );
};
