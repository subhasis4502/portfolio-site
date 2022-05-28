import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Subhasis Das
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Conatact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/subhasis4502">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/subhasis4502">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/subhasis4502">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Subhasis Das. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
