import React, { forwardRef } from "react";
import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import { PrimaryButton } from "../../../../components/button";
import { Heading2 } from "../../../../components/typography";

const Contact = forwardRef(({ ...props }, ref) => {
  const secondary = useColorModeValue("purple.500", "teal.200");

  return (
    <Box outline="0" ref={ref} tabIndex={-1} {...props} as="section">
      <Box mb="128px">
        <SectionHeader
          heading={<Heading2>contact</Heading2>}
          sibling={<Line />}
          mr="16px"
        />
      </Box>
      <Box
        mx="auto"
        w={{ base: "90%", xl: "70%" }}
        display="grid"
        placeItems="center"
      >
        <Text w="70%" fontSize="xl" mb="32px" align="center">
          I'm currently looking open to freelance and part-time/full-time job
          opportunties, so if you like what you've seen please don't hesitate to
          get in touch!
        </Text>
        <Text w="70%" fontSize="xl" mb="64px" align="center">
          If you have any questions or would just like to say hi, my inbox is
          always open and I'll endeavour to get back to you as soon as I can.
        </Text>
        <PrimaryButton
          as="a"
          _hover={{ textDecoration: "none" }}
          href="mailto:gregogun97@gmail.com"
          theme={secondary}
        >
          GET IN TOUCH
        </PrimaryButton>
      </Box>
    </Box>
  );
});

export default Contact;
