import React from "react";
import LoadingScreen from "../components/LoadingScreen";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Navbar from "../components/Navbar";
import GetTouch from "../components/GetTouch";
import AIAssistant from '../components/AIAssistant';
import Footer from "../components/Footer";

import '../index.css';
const Home = () => {
  return (
    <div>
      <LoadingScreen />
      <Hero />
      <Navbar/>
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <GetTouch/>
      <AIAssistant/>
      <Footer/>

    </div>
  );
};

export default Home;
