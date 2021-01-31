import { Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

export const Heading1 = ({ children, ...props }) => {
  return (
    <Heading
      {...props}
      as="h1"
      //size="4xl"
      fontSize={{ base: "3.5em", sm: "4em", md: "5em", lg: "6em" }}
    >
      {children}
    </Heading>
  );
};

export const Heading2 = ({ children, ...props }) => {
  return (
    <Heading
      as="h2"
      fontSize={{ base: "2.5em", md: "4em", lg: "5em" }}
      {...props}
    >
      {children}
    </Heading>
  );
};

export const TextLarge = ({ color, children, ...props }) => {
  return (
    <Text
      {...props}
      color={color}
      fontFamily="Roboto Mono, sans-serif"
      fontSize={{ base: "32px", md: "48px" }}
      fontWeight="bold"
    >
      {children}
    </Text>
  );
};

export const Heading3 = ({ big = false, color, children }) => {
  let fontSize;
  if (big) {
    fontSize = { base: "1.25em", sm: "2em", md: "2.5em", lg: "3em" };
  } else {
    fontSize = { base: "1.25em", sm: "1.5em", lg: "2em" };
  }
  return (
    <Heading
      as="h3"
      color={color}
      fontFamily={big ? "Poppins, sans-serif" : "Roboto Mono, monospace"}
      fontSize={fontSize}
      fontWeight="bold"
      my="8px"
    >
      {children}
    </Heading>
  );
};
