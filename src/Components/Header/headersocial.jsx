import React from "react";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";

const headerSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://www.github.com/" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default headerSocial;
