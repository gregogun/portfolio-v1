import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../../components/navbar";

const Header = () => {
  return (
    <Box as="header" w="100%">
      <Navbar />
    </Box>
  );
};

export default Header;
