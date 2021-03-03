import { Heading, Text, Flex, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";

export const Heading1 = ({ children, ...props }) => {
  return (
    <Heading
      {...props}
      as="h1"
      py={{ base: "0.25em", md: "0.75em" }}
      fontSize={{ base: "3em", sm: "4em", md: "5em", lg: "6em" }}
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
      //fontFamily="Roboto Mono, sans-serif"
      fontSize={{ base: "0.85em", md: "1.25em" }}
      //fontWeight="bold"
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

export const Body = ({ children, ...props }) => {
  return (
    <Text
      {...props}
      //fontSize={{ base: "xs", sm: "sm", md: "md", xl: "lg" }}
      fontSize={{ base: "md", sm: "md", xl: "lg" }}
    >
      {children}
    </Text>
  );
};

export const Bullet = ({ children, ...props }) => {
  const { secondary } = useColorSwitcher();
  return (
    <Stack {...props} spacing={3} direction="row">
      <Box
        background={secondary}
        boxSize={{ base: "6px", md: "10px", lg: "12px" }}
        rounded="full"
        position="relative"
        top={{ base: "6px", md: "7px", lg: "8px" }}
      />
      {children && <Body>{children}</Body>}
    </Stack>
  );
};

export const BodyLink = ({ href, children, ...props }) => {
  const { secondary } = useColorSwitcher();
  return (
    <Link text {...props} color={secondary} href={href}>
      {children}
    </Link>
  );
};
