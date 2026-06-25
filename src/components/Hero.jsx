import heroVideo from "../assets/hero-video.mp4";
import { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // IMPORTANT:
    // autoplay work ஆகணும்னா muted = true இருக்கணும்
    video.muted = true;
    video.volume = 1;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    playVideo();

    const handleScroll = async () => {
      if (!video) return;

      const heroHeight = window.innerHeight;

      if (window.scrollY > heroHeight - 100) {
        video.pause();
      } else {
        try {
          await video.play();
        } catch (err) {
          console.log("Play error:", err);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // user click பண்ணினா sound on
  const enableSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false;
      video.volume = 1;
      await video.play();
    } catch (err) {
      console.log("Sound enable failed:", err);
    }
  };

  return (
    <section id="home" className="hero" onClick={enableSound}>
      {/* Background Video */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="video-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <p className="intro-text">👋 Hello, I'm</p>

        <h1>
          Silver <span>Star</span>
        </h1>

        <h2>MERN Stack Developer</h2>

        <p className="hero-desc">
          I build premium websites with smooth animations,
          React, Node.js, MongoDB, Python, Django & TailwindCSS.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View My Work</button>
          </a>

          <a href="#contact">
            <button className="contact-btn">Contact Me</button>
          </a>

          <a href="/resume.docx" download>
            <button className="resume-btn">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;