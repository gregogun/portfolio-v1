import React from "react";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Icon,
  Center,
  Stack,
} from "@chakra-ui/react";
import { PrimaryButton } from "../../../../components/button";
import { Link as ScrollLink } from "react-scroll";
import { Heading1, Heading3 } from "../../../../components/typography";
import { IconPattern } from "../../../../assets/icons/imported";

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
    <Stack
      spacing={{ base: 32, md: 64, xl: 0 }}
      direction={{ base: "column", xl: "row" }}
      {...props}
      as="section"
    >
      <Box>
        <Box
          w={{ base: "100%", lg: "70%" }}
          px={{ base: "2px", md: "4px" }}
          mb="16px"
        >
          <IntroText>Hello, I'm</IntroText>
        </Box>
        <Box
          w={{ base: "100%", lg: "90%" }}
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
      <Center
        alignSelf={{ base: "center", xl: "inherit" }}
        boxSize={{ base: "15em", md: "20em", lg: "25em", xl: "30em" }}
      >
        <Icon boxSize="100%" fill={secondary} as={IconPattern} />
      </Center>
    </Stack>
  );
};

export default Hero;
