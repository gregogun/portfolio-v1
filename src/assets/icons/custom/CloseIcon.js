import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";

const CloseIcon = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      mx="auto"
      display={["flex", "", "", "none"]}
      justify="space-between"
      direction="column"
      align="center"
      w="48px"
      h="48px"
      p="16px"
    >
      <Box
        w="36px"
        h="4px"
        marginBottom="1"
        bg={colorMode === "light" ? "default.dark" : "default.light"}
        transform="translateY(.4em) rotate(-45deg)"
      />
      <Box
        w="36px"
        h="4px"
        bg={colorMode === "light" ? "default.dark" : "default.light"}
        transform="translateY(-.4em)  rotate(45deg)"
      />
    </Flex>
  );
};

export default CloseIcon;
