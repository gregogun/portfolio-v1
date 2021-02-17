import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/customTheme";
import Pages from "./pages";
import { Fonts } from "./utils/Fonts"

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Pages />
    </ChakraProvider>
  );
};

export default App;
