import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../../components/navbar";

const Header = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  return (
    <Box as="header" w="100%" h={{ base: "96px", md: "120px" }}>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </Box>
  );
};

export default Header;
