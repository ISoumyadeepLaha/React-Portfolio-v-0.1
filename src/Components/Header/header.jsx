import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../Assets/me.jpg";
import Headersocial from "./headersocial";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Soumyadeep Laha</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <Headersocial />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
      </div>
    </header>
  );
};

export default header;
