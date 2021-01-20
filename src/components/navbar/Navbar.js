import React, { useState } from "react";
import {
  Box,
  Flex,
  useColorMode,
  Button,
  Stack,
  IconButton,
  useColorModeValue,
  Icon,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import MenuIcon from "../../assets/MenuIcon";
import Logo from "../../assets/Logo";

const NavMenuItem = ({
  currentDestination,
  setCurrentDestination,
  destination,
  children,
}) => {
  return (
    <ListItem mx="16px">
      <Link
        as={ReachLink}
        to={destination}
        onClick={() => setCurrentDestination(destination)}
        fontWeight={currentDestination === destination && "bold"}
      >
        {children}
      </Link>
    </ListItem>
  );
};

const NavMenu = ({ ...props }) => {
  const [currentDestination, setCurrentDestination] = useState();

  return (
    <List
      {...props}
      display={{ base: "none", lg: "flex" }}
      justifyContent="space-between"
      w="15%"
    >
      <NavMenuItem
        currentDestination={currentDestination}
        setCurrentDestination={setCurrentDestination}
        destination="/"
      >
        home
      </NavMenuItem>
      <NavMenuItem
        currentDestination={currentDestination}
        setCurrentDestination={setCurrentDestination}
        destination="/about"
      >
        about
      </NavMenuItem>
      <NavMenuItem
        currentDestination={currentDestination}
        setCurrentDestination={setCurrentDestination}
        destination="/projects"
      >
        projects
      </NavMenuItem>
      <NavMenuItem
        currentDestination={currentDestination}
        setCurrentDestination={setCurrentDestination}
        destination="/contact"
      >
        contact
      </NavMenuItem>
    </List>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("default.light", "default.dark");
  const colorInvert = useColorModeValue("default.dark", "default.light");

  const ThemeIcon = () => (
    <Icon w="28px" h="28px" as={colorMode === "light" ? FaMoon : MdWbSunny} />
  );

  return (
    <>
      <Box
        bg="gray.200"
        as="nav"
        boxSizing="border-box"
        p={["1", "4"]}
        w="100%"
        // bg={color}
        // color={color}
      >
        <Flex
          bg="blue.200"
          m="auto"
          w={{ base: "100%", lg: "80%" }}
          my="3"
          justify="space-between"
          align="center"
          direction="row"
        >
          <Box
            display={{ base: "block", lg: "none" }}
            // bg="blue.400"
            w="30%"
          >
            <IconButton
              // bg="green.300"
              w="64px"
              h="60px"
              colorScheme={color}
              color={color}
              icon={<MenuIcon />}
            />
          </Box>
          <Box
            // bg="yellow.200"
            w="30%"
            display={{ base: "grid", lg: "block" }}
            placeItems="center"
          >
            <IconButton
              w="64px"
              h="64px"
              icon={<Logo />}
              colorScheme={color}
              color={color}
            />
          </Box>
          <Box bg="red.200">
            <Flex justify="space-between" align="center">
              <NavMenu mr="16px" />
              <Button
                onClick={toggleColorMode}
                rounded="0"
                border="3px solid"
                color={colorInvert}
                colorScheme="default.light"
                display={{ base: "none", md: "block" }}
                w={{ base: "188px" }}
                h={{ base: "56px" }}
              >
                <Box as="span">dark mode: {""}</Box>
                <Box as="span">{colorMode === "light" ? "off" : "on"}</Box>
              </Button>
            </Flex>
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
