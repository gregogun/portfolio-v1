import * as React from "react";
import { Box, forwardRef } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ballVariants = {
  init: {
    scale: [0, 0.2, 0.5, 0.8, 1],
    opacity: [0, 0.2, 0.5, 0.8, 1],
  },
  anim: {
    opacity: 1,
    scale: 1,
    translateY: [-50, 50, 100, 50, -50],
    borderRadius: ["50%", "50%", "50%", "50%", "50%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 0.5, 0.5, 1],
      loop: Infinity,
    },
  },
};

export const Ball = ({ ...props }) => {
  return (
    <MotionBox
      {...props}
      boxSize={{ base: "2em", md: "2em", lg: "5em", xl: "10em" }}
      variants={ballVariants}
      initial="init"
      animate="anim"
    />
  );
};

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

export default Ball;
