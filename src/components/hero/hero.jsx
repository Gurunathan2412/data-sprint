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

    const [width, setWidth] = useState('40%'); // Default width
  
    const handleResize = () => {
      // If screen width is between 350px and 850px, set width to 90%
      if (window.innerWidth >= 350 && window.innerWidth <= 850) {
        setWidth('90%');
      } else {
        setWidth('40%');
      }
    };
  
    useEffect(() => {
      // Add event listener on window resize
      window.addEventListener('resize', handleResize);
  
      // Call the function initially to set the correct width
      handleResize();
  
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);


  return (
    <div className="hero-cont">
      <section className="hero" id="hero">
        <div className="presents">
          Department of <span className="ai">Artificial Intelligence and Data Science</span>
          <br />
          <span className="pr">presents</span>
        </div>
        <GlitchImage
        className="glitch-image"
          image={logo}
          width={width}
          animationDuration={400}
          animationInterval={3000}
          activeFxOnHover={false}
          activeFxOnInterval={true}
        />
        <div className="sponsors">
          <span className="sp-hwk lineUp"> The registration has been closed</span>
        </div>
      </section>
      <Type dt={["Open to all streams", "Food will be provided", "24 Hours of creation", "24 Hours of fun", "Win exciting cash prizes!", "Enjoy!"]} />
      <div className="desc-cont">
        <p className="desc">
        <span>24 Hours</span>, Infinite Possibilities, Push the Boundaries of AI Innovation at the Data Sprint Hackathon!
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
        src="https://www.youtube.com/embed/K6GlwtmQhgM"
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
