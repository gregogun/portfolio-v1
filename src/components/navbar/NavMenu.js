import React, { useState } from "react";
import {
  Box,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";
import { Link as ScrollLink } from "react-scroll";
import SideNav from "./SideNav";

const NavMenu = ({
  onOpen,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  ...props
}) => {
  const { isOpen, onClose } = useDisclosure();
  const [toRef, setToRef] = useState();

  const handleClick = (child) => {
    if (child === "about") {
      aboutRef.current.focus({ preventScroll: true });
      setToRef(aboutRef);
    }
    if (child === "skills") {
      skillsRef.current.focus({ preventScroll: true });
      setToRef(skillsRef);
    }
    if (child === "projects") {
      projectsRef.current.focus({ preventScroll: true });
      setToRef(projectsRef);
    }
    if (child === "contact") {
      contactRef.current.focus({ preventScroll: true });
      setToRef(contactRef);
    }
  };

  return (
    <Box as="nav">
      <FullNav handleClick={handleClick} {...props}>
        <NavMenuItem handleClick={handleClick}>about</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>skills</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>projects</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>contact</NavMenuItem>
      </FullNav>
      <SideNav toRef={toRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <NavMenuItem handleClick={handleClick}>about</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>skills</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>projects</NavMenuItem>
        <NavMenuItem handleClick={handleClick}>contact</NavMenuItem>
      </SideNav>
    </Box>
  );
};

const FullNav = ({ handleClick, children, ...props }) => {
  return (
    <Stack
      as="ul"
      {...props}
      direction="row"
      display={{ base: "none", lg: "flex" }}
    >
      {children}
    </Stack>
  );
};

const NavMenuItem = ({ handleClick, children, ...props }) => {
  const { secondary } = useColorSwitcher();

  const isRef = () => {
    if (children === "about") {
      return 1000;
    }
    if (children === "skills") {
      return 1250;
    }
    if (children === "projects") {
      return 1500;
    }
    if (children === "contact") {
      return 2000;
    }
  };

  return (
    <ListItem
      {...props}
      p="0.25em"
      listStyleType="none"
      fontSize={{ base: "xl", lg: "lg" }}
      fontWeight="semibold"
      textAlign="center"
      transitionDuration="350ms"
      mx={{ lg: "1.5em" }}
      display="inline-block"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        width: { base: "40%", lg: "100%" },
        transform: "scaleX(0)",
        height: "2px",
        bottom: 0,
        left: { base: "30%", lg: 0 },
        bg: secondary,
        transformOrigin: "bottom right",
        transition: "transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)",
      }}
      _hover={{
        _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
      }}
    >
      <Link
        _hover={{ color: secondary, textDecoration: "none" }}
        onClick={() => handleClick(children)}
        href={`#${children}`}
      >
        {children}
      </Link>
    </ListItem>
  );
};

export default NavMenu;
