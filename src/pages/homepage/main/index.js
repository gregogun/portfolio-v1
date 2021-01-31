import React from "react";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import { MainLayout } from "../../../components/layout";

const Main = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const handleClick = () => {
    if (aboutRef) {
      aboutRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <MainLayout>
      <Hero
        handleClick={handleClick}
        mt="15vh"
        mb={{ base: "25vh", md: "30vh", xl: "30vh" }}
      />
      <About ref={aboutRef} id="about" pt="10vh" mb="30vh" />
      <Skills ref={skillsRef} id="skills" pt="10vh" mb="25vh" />
      <Projects ref={projectsRef} id="projects" pt="10vh" mb="25vh" />
      <Contact ref={contactRef} id="contact" pt="10vh" mb="25vh" />
    </MainLayout>
  );
};

export default Main;
