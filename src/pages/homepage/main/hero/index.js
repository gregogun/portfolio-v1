import React from "react";
import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

const BigText = ({ color, children }) => {
  return (
    <Text
      color={color}
      fontFamily="Poppins, sans-serif"
      fontSize={{ base: "32px", md: "48px" }}
      fontWeight="bold"
    >
      {children}
    </Text>
  );
};

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

const Heading1 = ({ color, children }) => {
  return (
    <Heading
      // mb="24px"
      color={color}
      as="h1"
      fontSize={{ base: "3.5em", sm: "4em", md: "5em", lg: "6em" }}
    >
      {children}
    </Heading>
  );
};

const ArrowIcon = (props) => {
  return (
    <IconButton
      display="block"
      mt="290px"
      mx="auto"
      icon={<Icon {...props} w="28px" h="28px" as={FaArrowDown} />}
    />
  );
};

const Hero = () => {
  return (
    <Box as="section" mb={{ base: "50vh", md: "60vh" }}>
      <Box
        // bg="gray.200"
        w={{ base: "100%", lg: "70%" }}
        px={{ base: "2px", md: "4px" }}
        mb="16px"
      >
        <IntroText>Hello, I'm</IntroText>
      </Box>
      <Box
        // bg="gray.200"
        w={{ base: "100%", lg: "70%" }}
        minH={{ base: "48px", md: "80px" }}
        py={{ base: "8px", lg: "16px" }}
        mb="8px"
      >
        <Heading1>Greg Ogun</Heading1>
      </Box>
      <Box
        // bg="gray.200"
        w={{ base: "100%", lg: "70%" }}
        py={{ base: "0", lg: "16px" }}
        px={{ base: "2px", lg: "4px" }}
      >
        <BigText bg="gray.200" color="purple.500">
          I build for the web.
        </BigText>
      </Box>
      <Box my="16px">
        <Text fontWeight="bold">
          I’m a front-end developer with a passion for designing and building
          user-centric and inclusive experiences on the web.
        </Text>
      </Box>
      <Box my={{ base: "32px" }}>
        <Button
          // onClick={toggleColorMode}
          rounded="0"
          border="3px solid"
          color="purple.500"
          colorScheme="purple.500"
          w={{ base: "188px" }}
          h={{ base: "56px" }}
        >
          GET IN TOUCH
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
