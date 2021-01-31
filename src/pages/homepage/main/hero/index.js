import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { PrimaryButton } from "../../../../components/button";
import { Link as ScrollLink } from "react-scroll";
import { Heading1, Heading3 } from "../../../../components/typography";

const IntroText = ({ color, children }) => {
  return (
    <Text
      color={color}
      fontFamily="Space Mono, monospace"
      fontSize={{ base: "18px", md: "32px" }}
      fontWeight="bold"
    >
      {children}
    </Text>
  );
};

const Hero = ({ handleClick, ...props }) => {
  const secondary = useColorModeValue("purple.500", "teal.200");

  return (
    <Box {...props} as="section">
      <Box
        w={{ base: "100%", lg: "70%" }}
        px={{ base: "2px", md: "4px" }}
        mb="16px"
      >
        <IntroText>Hello, I'm</IntroText>
      </Box>
      <Box
        w={{ base: "100%", lg: "70%" }}
        minH={{ base: "48px", md: "80px" }}
        py={{ base: "8px", lg: "16px" }}
        mb="8px"
      >
        <Heading1>Greg Ogun</Heading1>
      </Box>
      <Box
        w={{ base: "100%", lg: "70%" }}
        py={{ base: "0", lg: "16px" }}
        px={{ base: "2px", lg: "4px" }}
      >
        <Heading3 big={true} bg="gray.200" color={secondary}>
          Junior Front-End Developer
        </Heading3>
      </Box>
      <Box w={{ base: "90%", md: "75%", lg: "50%" }} my="16px">
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} fontWeight="bold">
          I’m a curiousity-driven coder with a passion for designing and
          building user-centric, inclusive experiences on the web.
        </Text>
      </Box>
      <Box my={{ base: "32px" }}>
        <ScrollLink
          to="about"
          onClick={handleClick}
          smooth={true}
          duration={750}
          delay={100}
        >
          <PrimaryButton theme={secondary}>LEARN MORE</PrimaryButton>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default Hero;
