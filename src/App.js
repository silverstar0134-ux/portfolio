import { useEffect, useState } from "react";


import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";

import "./App.css";

function App() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer =
      setTimeout(() => {
        setLoading(false);
      }, 3000);

    return () =>
      clearTimeout(timer);
  }, []);

  // Loader show
  if (loading) {
    return (
      <>
        <CustomCursor />
        <LoadingScreen />
      </>
    );
  }

  // Main website
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Hero />

      <About />

      <Stats />

      <Skills />

      <Services />

      <Projects />

      <Contact />

      <Footer />

      <BackToTop />
    </>
  );
}

export default App;