import { Button } from "@chakra-ui/react";
import React from "react";

const StyledButton = ({
  hoverColor,
  size,
  bg,
  color,
  border,
  variant = "solid",
  children,
  ...props
}) => {
  return (
    <Button
      size={size}
      bg={bg}
      color={color}
      border={border}
      _hover={{ bg: hoverColor }}
      rounded="none"
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
