import React from "react";
import { Box, Stack, useColorMode } from "@chakra-ui/react";

const MenuIcon = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      display={["flex", "", "", "none"]}
      direction="column"
      align="center"
      w="60px"
      h="60px"
      p="16px"
      // bg="red.200"
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
    </Stack>
  );
};

export default MenuIcon;
