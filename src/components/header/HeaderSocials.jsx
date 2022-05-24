import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaReddit } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/subhasis4502/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.linkedin.com/in/subhasis4502/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/subhasis4502/" target="_blank">
        <FaReddit />
      </a>
    </div>
  );
};

export default HeaderSocials;
