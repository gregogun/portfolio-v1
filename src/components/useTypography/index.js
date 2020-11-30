import { Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

const useTypography = () => {
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

  const Heading1 = ({ children, ...props }) => {
    return (
      <Heading
        {...props}
        color={color}
        as="h1"
        fontSize={{ base: "56px", md: "80px", lg: "96px" }}
        // mt="8px"
        // mb="48px"
      >
        {children}
      </Heading>
    );
  };

  const Heading2 = ({ sibling, children, ...props }) => {
    const Sibling = () => sibling;
    return (
      <Flex align="center">
        <Heading
          {...props}
          as="h2"
          fontSize={{ base: "40px", md: "64px", lg: "80px" }}
          // mt="8px"
          // mb="48px"
        >
          {children}
        </Heading>
        {sibling && <Sibling />}
      </Flex>
    );
  };

  return { Heading1, Heading2 };
};

export default useTypography;
