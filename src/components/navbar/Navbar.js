import React from "react";
import {
  Box,
  useColorMode,
  Button,
  Stack,
  IconButton,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import MenuIcon from "../../assets/MenuIcon";
import Logo from "../../assets/Logo";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("default.light", "default.dark");
  const colorInvert = useColorModeValue("default.dark", "default.light");

  const MoonIcon = () => <Icon w="28px" h="28px" as={FaMoon} />;

  return (
    <>
      <Box
        as="nav"
        boxSizing="border-box"
        p={["1", "4"]}
        w="100vw"
        bg={color}
        color={color}
      >
        <Stack
          m="auto"
          px="12px"
          // bg="green.200"
          w={["100%", "", "", "80%"]}
          my="3"
          justify="space-between"
          align="center"
          direction="row"
        >
          <Box
            display={{ base: "grid", lg: "none" }}
            placeItems="center"
            // bg="blue.400"
            w={{ base: "60px", md: "64px" }}
          >
            <IconButton
              w="64px"
              h="60px"
              colorScheme={color}
              color={color}
              icon={<MenuIcon />}
            />
          </Box>
          <Box>
            <IconButton
              w="64px"
              h="64px"
              icon={<Logo />}
              colorScheme={color}
              color={color}
            />
          </Box>
          <Button
            onClick={toggleColorMode}
            rounded="0"
            variant="outline"
            color={colorInvert}
            colorScheme="default.light"
            display={{ base: "none", md: "block" }}
            w={{ base: "152px" }}
            h={{ base: "48px" }}
          >
            <Box as="span">dark mode: {""}</Box>
            <Box as="span">{colorMode === "light" ? "off" : "on"}</Box>
          </Button>
          <IconButton
            w="64px"
            h="64px"
            onClick={toggleColorMode}
            display={{ base: "block", md: "none" }}
            colorScheme={color}
            color={colorInvert}
            icon={<MoonIcon />}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
