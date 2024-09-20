import React, { useEffect, useState } from "react";
import logo from "../navbar/static/hack-logo.png";
import "./hero.css";
import "./btn.css";
import Type from "../type/type";
import Countdown from "../timer/timer";
import Chront from "../chrono/chrono";
import About from "../about/about";
import Sponsors from "../sponsors/sponsors";
import { Link } from "react-router-dom";
import { GlitchImage } from "react-glitch-image";

const Hero = () => {
  return (
    <div className="hero-cont">
      <section className="hero" id="hero">
        <div className="presents">
          Department of <span className="ai">Artificial Intelligence and Data Science</span>
          <br />
          <span className="pr">presents</span>
        </div>
        <GlitchImage
          image={logo}
          width={"40%"}
          animationDuration={400}
          animationInterval={3000}
          activeFxOnHover={false}
          activeFxOnInterval={true}
        />
        <div className="sponsors">
          Sponsored by <span className="sp-hwk lineUp">Will be announced soon...</span>
        </div>
      </section>
      <Type dt={["Open to all streams", "Food will be provided", "24 Hours of creation", "24 Hours of fun", "Win exciting cash prizes!", "Enjoy!"]} />
      <div className="desc-cont">
        <p className="desc">
          Bring-out your hidden tech genius in this <span>24</span> hours hackathon by solving difficult problems faced by the public.
        </p>
      </div>
      <hr />
      <div className="countdown-txt">
        <h2>The countdown begins....</h2>
      </div>
      <Countdown />
      <div className="countdown-txt">
        <h2>October 14 - October 15 , 2024</h2>
      </div>
      <div className="butn-container">
        <Link to="guidelines">
          <button className="butn">Register</button>
        </Link>
      </div>

      {/* Embed YouTube video */}
      <div className="video-container">
    <iframe
        src="https://www.youtube.com/embed/fa8k8IQ1_X0?si=xMI6Z2x5t1c3CgM5"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
    ></iframe>
</div>

      <hr />
      <div className="hmc">
        <Chront style={{ paddingLeft: 0 }} />
      </div>
      <About />
      <Sponsors />
    </div>
  );
};

export default Hero;
