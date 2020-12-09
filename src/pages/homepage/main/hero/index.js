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
    <Box w={{ base: "100%", lg: "70%" }} p={{ base: "2px", md: "8px" }}>
      <Text
        color={color}
        fontFamily="Poppins, sans-serif"
        fontSize={{ base: "40px", md: "48px" }}
        fontWeight="bold"
      >
        {children}
      </Text>
    </Box>
  );
};

const Heading1 = ({ color, children }) => {
  return (
    <Box
      w={{ base: "100%", lg: "70%" }}
      py={{ base: "0", lg: "16px" }}
      mb="16px"
    >
      <Heading
        mb="40px"
        color={color}
        as="h1"
        fontSize={{ base: "3.5em", sm: "4em", md: "5em", lg: "6em" }}
      >
        {children}
      </Heading>
    </Box>
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
    <Box>
      <BigText>Hello, I'm</BigText>
      <Heading1>Greg Ogun</Heading1>
      <Text fontWeight="bold">A front-end developer and maker of things.</Text>
    </Box>
  );
};

export default Hero;
