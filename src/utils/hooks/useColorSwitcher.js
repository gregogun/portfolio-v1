import { useColorModeValue } from "@chakra-ui/react";

const useColorSwitcher = () => {
  const colorLight = useColorModeValue("default.light", "default.dark");
  const colorDark = useColorModeValue("default.dark", "default.light");
  const hoverLight = useColorModeValue("neutral.50", "neutral.800");
  const hoverDark = useColorModeValue("neutral.800", "neutral.100");

  const secondary = useColorModeValue("purple.500", "teal.200");

  return { colorLight, colorDark, hoverLight, hoverDark, secondary };
};

export default useColorSwitcher;
