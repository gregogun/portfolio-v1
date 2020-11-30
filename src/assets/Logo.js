import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";

const Logo = () => {
  const { colorMode } = useColorMode();

  const fillColor = colorMode === "dark" ? "#fcfcfc" : "#232323";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={72}
      height={72}
      viewBox="0 0 512 512"
      // {...props}
    >
      <text
        data-name="g black"
        transform="matrix(.474 0 0 .474 149.808 278.763)"
        fontSize={1318.358}
        fill={fillColor}
        fontFamily="FabfeltScript"
        fontWeight={700}
      >
        {"g"}
      </text>
    </svg>
  );
};

export default Logo;
