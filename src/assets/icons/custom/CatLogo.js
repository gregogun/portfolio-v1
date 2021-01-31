import { Icon } from "@chakra-ui/react";
import React from "react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";
import { IconCat } from "../imported";

const CatLogo = () => {
  const { colorDark } = useColorSwitcher();
  return <Icon fill={colorDark} boxSize="50%" as={IconCat} />;
};

export default CatLogo;
