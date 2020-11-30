import { Button } from "@chakra-ui/react";
import React from "react";

// Button Base (sm, md, l)

const BaseButtonSm = ({ children, ...props }) => {
  return (
    <Button w="108px" h="36px" {...props}>
      {children}
    </Button>
  );
};

const BaseButtonMd = ({ children, ...props }) => {
  return (
    <Button w="144px" h="40px" {...props}>
      {children}
    </Button>
  );
};

const BaseButtonLg = ({ children, ...props }) => {
  return (
    <Button w="180px" h="56px" {...props}>
      {children}
    </Button>
  );
};

// Default Buttons

const DefaultButton = ({ bSize, type, children, ...props }) => {
  return (
    <>
      {bSize === "md" && <BaseButtonMd {...props}>{children}</BaseButtonMd>}
      {bSize === "sm" && <BaseButtonSm {...props}>{children}</BaseButtonSm>}
      {bSize === "lg" && <BaseButtonLg {...props}>{children}</BaseButtonLg>}
    </>
  );
};

const OutlineButton = ({ bSize, type, children, ...props }) => {
  return (
    <>
      {bSize === "sm" && (
        <BaseButtonSm variant="outline" {...props}>
          {children}
        </BaseButtonSm>
      )}
      {bSize === "md" && (
        <BaseButtonMd variant="outline" {...props}>
          {children}
        </BaseButtonMd>
      )}
      {bSize === "lg" && (
        <BaseButtonLg variant="outline" {...props}>
          {children}
        </BaseButtonLg>
      )}
    </>
  );
};

const StyledButton = ({ bSize, bVariant, type, ...props }) => {
  return (
    <>
      {bVariant === undefined && (
        <DefaultButton bSize={bSize} type={type} {...props} />
      )}
      {bVariant === "default" && (
        <DefaultButton bSize={bSize} type={type} {...props} />
      )}
      {bVariant === "outline" && (
        <OutlineButton bSize={bSize} type={type} {...props} />
      )}
    </>
  );
};

export default StyledButton;
