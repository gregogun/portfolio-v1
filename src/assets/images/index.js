import { Image } from "@chakra-ui/react";
import React from "react";
import profile from "./me.jpg";

export const ImageProfile = () => {
  return (
    <Image
      mx="auto"
      borderRadius="full"
      objectFit="cover"
      boxSize={{
        base: "160px",
        sm: "240px",
        md: "300px",
        lg: "320px",
        xl: "400px",
      }}
      src={profile}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Greg Ogun"
    />
  );
};
