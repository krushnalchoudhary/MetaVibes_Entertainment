import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-bg-video" autoPlay muted loop playsInline>
        <source src="/videos/marketing-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>MetaVibes Entertainment</h1>
        <p>Your Gateway to Next-Gen Digital Marketing & Immersive Experiences</p>
        <a href="#services" className="hero-button">Explore Services</a>
      </div>
    </section>
  );
};

export default Hero;
