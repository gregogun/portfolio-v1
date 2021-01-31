import React from "react";
import { Box } from "@chakra-ui/react";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";

const Line = ({ h = "2px", w = "100%", ...props }) => {
  const { colorDark } = useColorSwitcher();

  return (
    <Box {...props} display={{ base: "block" }} bg={colorDark} h={h} w={w} />
  );
};

export default Line;
