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
      fontSize={{ base: "40px", md: "48px" }}
      fontWeight="bold"
    >
      {children}
    </Text>
  );
};

const Heading1 = ({ color, children }) => {
  return (
    <Heading
      color={color}
      as="h1"
      fontSize={{ base: "56px", md: "80px", lg: "96px" }}
      mt="8px"
      mb="48px"
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
    <Box mt="80px" mb="15vh">
      <BigText>Hello, I'm</BigText>
      <Heading1>Greg Ogun</Heading1>
      <Text fontWeight="bold">
        I’m a front-end developer passionate about building interactive and
        inclusive experiences on the web.
      </Text>
      <ArrowIcon />
    </Box>
  );
};

export default Hero;
