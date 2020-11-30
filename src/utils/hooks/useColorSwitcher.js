import { useColorModeValue } from "@chakra-ui/react";

const useColorSwitcher = () => {
  const colorLight = useColorModeValue("default.light", "default.dark");
  const colorDark = useColorModeValue("default.dark", "default.light");

  return { colorLight, colorDark };
};

export default useColorSwitcher;
