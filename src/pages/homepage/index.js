import React, { useRef, useState } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { SkipNavLink } from "@chakra-ui/skip-nav";
import { PrimaryButton } from "../../components/button";

const Homepage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <PrimaryButton
        as="a"
        href="#about"
        position="absolute"
        transform="translateX(-100%)"
        transition="transform 0.3s"
        _focus={{ transform: "translateX(0%)" }}
      >
        Skip To Content
      </PrimaryButton>
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
