import "./Footer.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-links-wrapper">
        <a className="footer-links" href="/">
          Facebook
        </a>
        <a className="footer-links" href="/">
          Instagram
        </a>
        <a className="footer-links" href="/">
          Github
        </a>
        <a className="footer-links" href="/">
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
    
        <a className="webfooter-links" href="https://github.com/parvejg/e-commerce-app-">
          <FaGithub />
        </a>
        <a className="webfooter-links" href="https://www.linkedin.com/in/md-parvez-6b6a5a259">
          <AiFillLinkedin />
        </a>
        <a className="webfooter-links" href="https://instagram.com/parvez321pg/">
          <RiInstagramFill />
        </a>
      </div>
    </div>
  );
};
