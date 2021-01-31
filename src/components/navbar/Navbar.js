import React, { useRef } from "react";
import {
  Box,
  Flex,
  useColorMode,
  IconButton,
  useColorModeValue,
  Icon,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { MenuIcon } from "../../assets/icons";
import { Logo } from "../../assets/icons";
import { navigate } from "@reach/router";
import { PrimaryButton } from "../button";
import SideNav from "./SideNav";
import NavMenu from "./NavMenu";

const Navbar = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("default.light", "default.dark");
  const colorInvert = useColorModeValue("default.dark", "default.light");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const ThemeIcon = () => (
    <Icon w="28px" h="28px" as={colorMode === "light" ? FaMoon : MdWbSunny} />
  );

  return (
    <>
      <Box as="nav" boxSizing="border-box" p={["1", "4"]} w="100%">
        <Flex
          m="auto"
          w={{ base: "100%", md: "90%", lg: "80%" }}
          my="3"
          justify="space-between"
          align="center"
          direction="row"
          position="relative"
        >
          <Box display={{ base: "block", lg: "none" }} w="30%">
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              w="64px"
              h="60px"
              colorScheme={color}
              color={color}
              icon={<MenuIcon />}
            />
          </Box>
          <SideNav isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          <Box
            w="30%"
            display={{ base: "grid", md: "block" }}
            placeItems="center"
          >
            <IconButton
              onClick={() => navigate("/")}
              w="64px"
              h="64px"
              icon={<Logo />}
              colorScheme={color}
              color={color}
            />
          </Box>
          <Box position="absolute" right="8px">
            <Stack
              direction="row"
              spacing={8}
              justify="space-between"
              align="center"
            >
              <NavMenu
                aboutRef={aboutRef}
                skillsRef={skillsRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
              />
              <PrimaryButton
                display={{ base: "none", md: "block" }}
                onClick={toggleColorMode}
              >
                <Box as="span">dark mode: {""}</Box>
                <Box as="span">{colorMode === "light" ? "off" : "on"}</Box>
              </PrimaryButton>
            </Stack>
          </Box>
          <Flex w="30%" direction="row-reverse">
            <IconButton
              w="64px"
              h="64px"
              onClick={toggleColorMode}
              display={{ base: "block", md: "none" }}
              colorScheme={color}
              color={colorInvert}
              icon={<ThemeIcon />}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
