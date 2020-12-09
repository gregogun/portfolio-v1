import React from "react";
import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Hero from "./hero";
import { Router } from "@reach/router";

const Main = () => {
  return (
    <Box
      as="main"
      w={{ base: "100vw", md: "80vw" }}
      px="24px"
      py="180px"
      m="auto"
    >
      <Router>
        <Hero path="/" />
        <About path="/about" />
        <Projects path="/projects" />
        <Contact path="/contact" />
      </Router>
    </Box>
  );
};

export default Main;
