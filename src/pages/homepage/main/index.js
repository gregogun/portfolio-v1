import React from "react";
import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Hero from "./hero";

const Main = () => {
  return (
    <Box as="main" w="100vw" px="24px">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Main;
