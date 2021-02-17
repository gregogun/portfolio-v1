import { Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import profile from "./me.jpg";
import portfolio from "./portfolio";
import gitjobs from "./gitjobs";

export const ImageProfile = () => {
  return (
    <Image
      mx="auto"
      borderRadius="full"
      objectFit="cover"
      boxSize={{
        base: "160px",
        sm: "240px",
        md: "300px",
        lg: "320px",
        xl: "400px",
      }}
      src={profile}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Greg Ogun"
    />
  );
};

export const PortfolioImg = () => {
  const { colorMode } = useColorMode();
  return (
    <Image
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={portfolio.light[2]}
      srcSet={`${
        colorMode === "light" ? portfolio.light[0] : portfolio.dark[0]
      } 400w, ${
        colorMode === "light" ? portfolio.light[1] : portfolio.dark[1]
      } 800w`}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Portfolio Site"
    />
  );
};

export const GitjobsImg = () => {
  const { colorMode } = useColorMode();
  return (
    <Image
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={gitjobs.light[2]}
      srcSet={`${
        colorMode === "light" ? gitjobs.light[0] : gitjobs.dark[0]
      } 400w, ${
        colorMode === "light" ? gitjobs.light[1] : gitjobs.dark[1]
      } 800w`}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Gitjobs project"
    />
  );
};
