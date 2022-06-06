import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFoldersLine } from "react-icons/ri"
import ME from "../../Assets/me.about.jpg";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__cotainer">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
              <small>1 yr</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Company</h5>
              <small>BFC Technologies</small>
            </article>
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam dolorem cumque, enim vel eligendi quaerat quas facere officiis alias in et eveniet? Itaque obcaecati hic similique cupiditate? Officia, asperiores</p>

          <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default about;
