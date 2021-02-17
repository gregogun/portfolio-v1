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
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { MenuIcon } from "../../assets/icons";
import { Logo } from "../../assets/icons";
import { navigate } from "@reach/router";
import { PrimaryButton } from "../button";
import SideNav from "./SideNav";
import NavMenu from "./NavMenu";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";

const Navbar = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorLight, colorDark } = useColorSwitcher();

  const ThemeIcon = () => (
    <Icon w="28px" h="28px" as={colorMode === "light" ? FaMoon : MdWbSunny} />
  );

  return (
    <Flex
      m="auto"
      p=".5em"
      w={{ base: "100%", md: "90%", lg: "80%" }}
      my="3"
      justify="space-between"
      align="center"
      direction="row"
      position="relative"
    >
      <NavMenu
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Icon
        order={{ lg: -1 }}
        stroke={colorDark}
        strokeWidth="2px"
        p="8px"
        w="64px"
        h="64px"
        as={Logo}
      />

      <IconButton
        w="64px"
        h="64px"
        onClick={toggleColorMode}
        colorScheme={colorLight}
        color={colorDark}
        icon={<ThemeIcon />}
      >
        <VisuallyHidden>
          {colorMode === "light" ? "Toggle Dark Mode" : "Toggle Light Mode"}
        </VisuallyHidden>
      </IconButton>
    </Flex>
  );
};

export default Navbar;
