import { createIcon, defaultProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const IconCircles = createIcon({
  defaultProps,
  displayName: "IconCircles",
  viewBox: " 0 0 182 32",
  path: (
    <motion.svg width="91" height="65">
      <motion.circle
        cx="57.7778"
        cy="32.5"
        r="32"
        fill="#232323"
        stroke="#FCFCFC"
      />
      <motion.circle cx="32.5" cy="32.5" r="32.5" fill="#FCFCFC" />
    </motion.svg>
  ),
});

export default IconCircles;
