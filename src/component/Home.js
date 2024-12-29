import React from "react";
import photo from "../assests/photo2.jpeg";
const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="about__container bd-grid">
        <div className="about__img2">
          <img src={photo} alt="Error" />
        </div>
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I'am <span className="home__title-color">Aniket</span>
            <br /> Software Developer
          </h1>
          <a href="#contact" className="button">
            Contact
          </a>
        </div>

        {/* <div className="home__social">
          <a
            href="https://www.linkedin.com/in/aniket-kumar-99b591234/"
            className="home__social-icon"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="mailto:aniketk.ug21.cs@nitp.ac.in"
            className="home__social-icon"
          >
            <i className="bx bxl-gmail"></i>
          </a>
          <a
            href="https://github.com/aniket-4971"
            className="home__social-icon"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
