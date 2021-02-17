import React from "react";
import { Icon } from "@chakra-ui/react";
import { css } from "@emotion/react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";
import { BsArrowDown } from "react-icons/bs";

const Arrow = ({ ...props }) => {
  const { colorDark } = useColorSwitcher();
  return (
    <Icon
      {...props}
      as={BsArrowDown}
      size="2em"
      fill={colorDark}
      css={css`
        animation: arrowAnimation 1.5s infinite ease-out;

        @keyframes arrowAnimation {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          to {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
            opacity: 0;
          }
        }
      `}
    />
  );
};

export default Arrow;
