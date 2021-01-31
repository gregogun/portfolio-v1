import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";

const MenuIcon = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
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
      />
      <Box
        w="36px"
        h="4px"
        bg={colorMode === "light" ? "default.dark" : "default.light"}
      />
    </Flex>
  );
};

export default MenuIcon;
