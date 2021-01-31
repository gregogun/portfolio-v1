import { useColorModeValue } from "@chakra-ui/react";

const useColorSwitcher = () => {
  const colorLight = useColorModeValue("default.light", "default.dark");
  const colorDark = useColorModeValue("default.dark", "default.light");
  const hoverLight = useColorModeValue("neutral.50", "neutral.800");
  const hoverDark = useColorModeValue("neutral.800", "neutral.100");

  const brandColor = useColorModeValue(
    "brand.primary.500",
    "brand.secondary.200"
  );

  return { colorLight, colorDark, hoverLight, hoverDark, brandColor };
};

export default useColorSwitcher;
