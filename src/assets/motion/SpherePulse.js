import React from "react";
import {
  Box,
  keyframes,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const SpherePulse = ({ ...props }) => {
  const secondary = useColorModeValue("purple.500", "teal.200");
  const { colorMode } = useColorMode();
  return (
    <Box
      {...props}
      display="block"
      boxSize={{ base: "0.5em", md: "0.6em", lg: "0.75em" }}
      rounded="full"
      background={secondary}
      boxShadow={`${secondary}66`}
      animation={`${
        colorMode === "light" ? pulseAnimLight : pulseAnimDark
      } 2s infinite`}
    />
  );
};

const pulseAnimLight = keyframes`
0% {
  box-shadow: 0 0 0 0 #805AD566;
}
70% {
  box-shadow: 0 0 0 10px #805AD503;
}
100% {
  box-shadow: 0 0 0 0 #805AD503;
}
`;
const pulseAnimDark = keyframes`
0% {
  box-shadow: 0 0 0 0 #81E6D966;
}
70% {
  box-shadow: 0 0 0 10px #81E6D903;
}
100% {
  box-shadow: 0 0 0 0 #81E6D903;
}
`;

export default SpherePulse;
