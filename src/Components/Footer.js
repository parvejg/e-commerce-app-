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
        <a className="webfooter-links" href="/">
          <FaFacebook />
        </a>
        <a className="webfooter-links" href="/">
          <RiInstagramFill />
        </a>
        <a className="webfooter-links" href="/">
          <FaGithub />
        </a>
        <a className="webfooter-links" href="/">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};
