import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";
import "./header.css";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Subhasis Das</h1>
        <h4 className="text-light">
          <Typewriter
            className="text-light"
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Full Stack Developer")
                .start()
            }}
          />
        </h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
