import { createIcon, defaultProps, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";

const groupVariants = {
  hidden: {
    fillOpacity: -25,
  },
  visible: {
    fillOpacity: 1,

    transition: {
      // delay: 0.5,
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const leftBracket = createIcon({
  defaultProps,
  displayName: "Brackets",
  viewBox: "0 0 100 100",
  path: (
    <motion.path
      d="m 41,972.36215 0,3 0,54.00005 0,3 3,0 12,0 3,0 0,-6 -3,0 -9,0 0,-48.00005 9,0 3,0 0,-6 -3,0 -12,0 -3,0 z"
      fill="#333333"
      fill-opacity="1"
      stroke="none"
      marker="none"
      visibility="visible"
      display="inline"
      overflow="visible"
    />
  ),
});

export const rightBracket = createIcon({
  defaultProps,
  displayName: "Brackets",
  viewBox: "0 0 100 100",
  path: (
    <motion.path
      d="m 59,972.36215 0,3 0,54.00005 0,3 -3,0 -12,0 -3,0 0,-6 3,0 9,0 0,-48.00005 -9,0 -3,0 0,-6 3,0 12,0 3,0 z"
      fill="#333333"
      fill-opacity="1"
      stroke="none"
      marker="none"
      visibility="visible"
      display="inline"
      overflow="visible"
    ></path>
  ),
});
