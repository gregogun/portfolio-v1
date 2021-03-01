import React, { useEffect, useState } from "react";
import { Box, Text, Center, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../../../../components/button";
import { Body, Heading1, Heading3 } from "../../../../components/typography";
import Arrow from "../../../../assets/icons/custom/Arrow";
import { CircleArray } from "../../../../assets/motion/CircleArray";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const IntroText = ({ color, children }) => {
  return (
    <Text
      color={color}
      fontFamily="Space Mono, monospace"
      fontSize={{ base: "18px", md: "32px" }}
      fontWeight="bold"
    >
      {children}
    </Text>
  );
};

const Hero = ({ handleClick, ...props }) => {
  const [scrollPos, setScrollPos] = useState();
  const { secondary, colorLight } = useColorSwitcher();

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  });

  const listenScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolledFloat = windowScroll / height;

    const scrolled = scrolledFloat > 0.05;

    setScrollPos(scrolled);
  };

  return (
    <Box {...props}>
      <Stack
        spacing={{ base: 32, sm: 24, md: 64, lg: 80, xl: 8, xxl: 32 }}
        direction={{ base: "column", xl: "row" }}
        pb={{ xl: "1em", xxl: "10em" }}
        as="section"
        align="center"
        position="relative"
      >
        <HeroText order={-2} handleClick={handleClick} />
        <FloatingArrow scrollPos={scrollPos} />
        <Center
          //border="2px solid"
          rounded="full"
          order={{ xl: -1 }}
          alignSelf={{ base: "center", xl: "inherit" }}
          //p="2em"
        >
          <CircleArray
            strokeWidth="0.5px"
            fill={secondary}
            stroke={secondary}
            boxSize={{ base: "15em", md: "22em" }}
          />
        </Center>
      </Stack>
    </Box>
  );
};

const HeroText = ({ handleClick, ...props }) => {
  const { secondary } = useColorSwitcher();
  return (
    <Box as="section" {...props}>
      <IntroText>Hello, I'm</IntroText>

      <Heading1>Greg Ogun</Heading1>
      <Heading3 big={true} color={secondary}>
        Front-End Developer
      </Heading3>
      <Body
        w={{ base: "90%", xl: "70%" }}
        bg={{
          base: "red.200",
          xs: "yellow.200",
          sm: "blue.200",
          md: "green.200",
        }}
        fontWeight="bold"
      >
        A curiousity-driven coder with a passion for designing and building
        user-centric, inclusive experiences on the web.
      </Body>
      <Box my={{ base: "32px" }}>
        <PrimaryButton
          as="a"
          href="mailto:gregogun97@gmail.com"
          theme={secondary}
        >
          GET IN TOUCH
        </PrimaryButton>
      </Box>
    </Box>
  );
};

const FloatingArrow = ({ scrollPos }) => {
  return (
    <Box
      opacity={scrollPos ? 0 : 1}
      transition="visibility 0s linear 300ms, opacity 600ms"
      visibility={scrollPos ? "hidden" : "visible"}
      position={{ xl: "absolute" }}
      bottom={{ xl: "16px", xxl: "8px" }}
      left={{ xl: "45%" }}
    >
      <Arrow size="8px" />
    </Box>
  );
};

export default Hero;
