import React from "react";
import { Box, keyframes, useColorModeValue } from "@chakra-ui/react";

const SpinBall = () => {
  const secondary = useColorModeValue("purple.500", "teal.200");
  return (
    <Box
      display="grid"
      placeItems="center"
      rounded="full"
      boxSize="5em"
      pos="relative"
      animation={`${rotateInf} infinite 2s linear`}
      //boxShadow="0 0 0 1px"
      //p="10em"
    >
      <Box
        width="50%"
        height="50%"
        display="inline-block"
        position="absolute"
        top={0}
        backgroundColor={secondary}
        borderRadius="100%"
        animation={`${bounceInf} 2s infinite ease-in-out`}
      />
      <Box
        width="30%"
        height="30%"
        display="inline-block"
        position="absolute"
        backgroundColor={secondary}
        borderRadius="100%"
        top="auto"
        bottom={0}
        animation={`${bounceInf} 2s infinite ease-in-out`}
        sx={{ animationDelay: "-1s" }}
      />
    </Box>
  );
};

const rotateInf = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const bounceInf = keyframes`
0%, 100% {
  transform: scale(0);
  -webkit-transform: scale(0);
}
50% {
  transform: scale(1);
  -webkit-transform: scale(1);
}
`;

export default SpinBall;
