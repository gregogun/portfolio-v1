import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";

const Footer = () => {
  const { colorDark } = useColorSwitcher();

  return (
    <Box w="100%">
      <Heading h={{ base: "120px" }} color={colorDark} textAlign="center">
        Footer
      </Heading>
    </Box>
  );
};

export default Footer;
