import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/customTheme";
import Pages from "./pages";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Pages />
    </ChakraProvider>
  );
};

export default App;
