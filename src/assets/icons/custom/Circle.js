import React from "react";
import { motion } from "framer-motion";

const Circle = ({ ...props }) => {
  const circleVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <circle
        stroke="#865cff"
        stroke-width="2px"
        fill="none"
        cx="500"
        cy="500"
        r="50"
      />
    </svg>
  );
};

export default Circle;
