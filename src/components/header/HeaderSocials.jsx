import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/subhasis4502/" target="_blank">
        <BsLinkedin className="header__socials-icon"/>
      </a>
      <a href="https://github.com/subhasis4502/" target="_blank">
        <FaGithub className="header__socials-icon"/>
      </a>
      <a href="https://discord.com/users/subhasis4502/" target="_blank">
        <SiDiscord className="header__socials-icon"/>
      </a>
    </div>
  );
};

export default HeaderSocials;
