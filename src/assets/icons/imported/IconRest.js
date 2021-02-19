import { Icon } from "@chakra-ui/react";
import React from "react";
import { FaCogs } from "react-icons/fa";

const IconRest = ({ ...props }) => {
  return <Icon {...props} as={FaCogs} />;
};

export default IconRest;
