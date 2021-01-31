import React, { useRef, useState } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Projects from "./main/projects";

const Homepage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Header
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Main
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Footer />
    </>
  );
};

export default Homepage;
