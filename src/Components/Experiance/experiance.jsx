import React from "react";
import "./experiance.css";
import { AiFillCheckSquare } from "react-icons/ai";

const experiance = () => {
  return (
    <section id="experiance">
      <h5>What Sills I have</h5>
      <h2>My Experiance</h2>

      <div className="container experiance__container">

       {/* Frontend  */}
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
             <div>
             <h4>JavaScript</h4>
              <small className="text-light">Beginner</small>
             </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
             <div>
             <h4>Bootstrap</h4>
              <small className="text-light">Beginner</small>
             </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
              <div>
                <h4>Material UI</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
              <div>
              <h4>React Js</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend */}
        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
              <div>
              <h4>Node Js</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
              <div>
              <h4>Express</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
             <div>
             <h4>MongoDB</h4>
              <small className="text-light">Beginner</small>
             </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare className="experiance__details-icons"/>
              <div>
              <h4>PostgreSQL</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <AiFillCheckSquare  className="experiance__details-icons"/>
              <div>
              <h4>Go Gin</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experiance;
