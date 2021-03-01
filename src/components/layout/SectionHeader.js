import { Flex } from "@chakra-ui/react";
import React from "react";

const SectionHeader = ({
  heading,
  sibling,
  reverse = false,
  children,
  ...props
}) => {
  const Sibling = () => sibling;
  return (
    <Flex
      {...props}
      direction={reverse && "row-reverse"}
      justify={sibling && "space-between"}
      align="center"
    >
      {children}
      {sibling && <Sibling />}
    </Flex>
  );
};

export default SectionHeader;
