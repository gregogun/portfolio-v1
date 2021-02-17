import { Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

export const Heading1 = ({ children, ...props }) => {
  return (
    <Heading
      {...props}
      as="h1"
      py={{ base: "0.25em", md: "0.75em" }}
      fontSize={{ base: "3.5em", sm: "4em", md: "5em", lg: "6em" }}
      lineHeight={{ base: "1em", sm: 0 }}
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
      fontSize={{ base: "2em", md: "3em" }}
      fontWeight="bold"
    >
      {children}
    </Text>
  );
};

export const Heading3 = ({ big = false, color, children, ...props }) => {
  let fontSize;
  if (big) {
    fontSize = { base: "1.25em", sm: "2em", md: "2.5em" };
  } else {
    fontSize = { base: "1.25em", sm: "1.5em", lg: "1.5em" };
  }
  return (
    <Heading
      {...props}
      as="h3"
      color={color}
      fontFamily={big ? "Poppins, sans-serif" : "Roboto Mono, monospace"}
      fontSize={fontSize}
      fontWeight="bold"
      lineHeight="1.25em"
      my="8px"
    >
      {children}
    </Heading>
  );
};
