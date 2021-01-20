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
      minH={{ base: "540px" }}
      as="main"
      w={{ base: "100vw", md: "90vw", lg: "80vw" }}
      px="24px"
      py="128px"
      m="auto"
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Main;
