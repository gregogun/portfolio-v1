import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { forwardRef, useEffect } from "react";
import { ImageProfile } from "../../../../assets/images";
import SpherePulse from "../../../../assets/motion/SpherePulse";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  Body,
  Bullet,
  Heading2,
  Heading3,
} from "../../../../components/typography";

const About = forwardRef(({ ...props }, ref) => {
  const greyBg = useColorModeValue("neutral.300", "neutral.500");
  const lightGreyBg = useColorModeValue("neutral.100", "neutral.700");

  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props} w="100%">
      <Box w="100%" mb={{ base: "32px", md: "64px", xl: "128px" }}>
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>about</Heading2>
        </SectionHeader>
      </Box>
      <Stack
        align="center"
        spacing={16}
        direction={{ base: "column-reverse", xl: "row" }}
        justify={{ base: "space-between", xl: "space-evenly" }}
      >
        <Box
          bg={lightGreyBg}
          rounded="full"
          display="grid"
          placeItems="center"
          p={{ base: "8px", md: "16px" }}
        >
          <Box
            bg={greyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: "8px", md: "16px" }}
          >
            <ImageProfile />
          </Box>
        </Box>
        <Stack spacing={12} p="8px" w={{ base: "100%", xl: "50%" }}>
          <Body mb="2em">
            Hello! I'm Greg, a junior front-end developer based in Bedford, UK.
            I love to work on exciting projects that test what I've learnt,
            whilst being exposed to the power and potential of the ever-evolving
            technologies around us. I'm always looking for better, and more
            importantly, ethical and accessible ways to solve the common
            problems we are faced with day-to-day.
          </Body>
          <Box>
            <Heading3>What I've been up to:</Heading3>
            <Stack as="ul">
              <Bullet as="li">Building this!</Bullet>
              <Bullet as="li">Getting deeper into React and Nodejs</Bullet>
              <Bullet as="li">Learning GraphQL</Bullet>
              <Bullet as="li">Starting my podcast show and blogging</Bullet>
              <Bullet as="li">Preparing for the Chingu Voyage 28!</Bullet>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
});

export default About;
