import { Icon, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import {
  FaDev,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";

const IconBase = ({ icon, ...props }) => {
  const secondary = useColorModeValue(
    "brand.primary.500",
    "brand.secondary.200"
  );
  return (
    <Icon
      {...props}
      transition="250ms ease-out"
      w="24px"
      h="24px"
      _hover={{ w: "28px", h: "28px", fill: secondary }}
      as={icon}
    />
  );
};

export const IconLinkedin = () => {
  return <IconBase icon={FaLinkedinIn} />;
};

export const IconGithubAlt = () => {
  return <IconBase icon={FaGithub} />;
};

export const IconTwitter = () => {
  return <IconBase icon={FaTwitter} />;
};

export const IconYoutube = () => {
  return <IconBase icon={FaYoutube} />;
};

export const IconTwitch = () => {
  return <IconBase icon={FaTwitch} />;
};

export const IconDev = () => {
  return <IconBase icon={FaDev} />;
};
