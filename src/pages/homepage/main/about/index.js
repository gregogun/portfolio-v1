import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { forwardRef, useEffect } from "react";
import { ImageProfile } from "../../../../assets/images";
import { Line, SectionHeader } from "../../../../components/layout";
import { Heading2 } from "../../../../components/typography";

const About = forwardRef(({ ...props }, ref) => {
  const greyBg = useColorModeValue("neutral.300", "neutral.500");
  const lightGreyBg = useColorModeValue("neutral.100", "neutral.700");

  return (
    <Box outline="0" ref={ref} tabIndex={-1} {...props} w="100%" as="section">
      <Box w="100%" mb={{ base: "32px", md: "64px", xl: "128px" }}>
        <SectionHeader
          heading={<Heading2>about</Heading2>}
          sibling={<Line />}
          mr="16px"
        />
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
          p="16px"
        >
          <Box
            bg={greyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p="16px"
          >
            <ImageProfile />
          </Box>
        </Box>
        <Box p="8px" w={{ base: "100%", xl: "50%" }}>
          <Text fontSize={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}>
            Hello! I'm Greg, a junior front-end developer based in Bedford, UK.
            I love to work on exciting projects that test what I've learnt,
            whilst being exposed to the power and potential of the ever-evolving
            technologies around us. Whilst most of the projects I've worked on
            have been to improve my skills, I also believe in working on
            projects that push social change.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
});

export default About;
