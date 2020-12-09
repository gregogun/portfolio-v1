import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../src/utils/customTheme";
import React from "react";

export const decorators = [
  (Story) => (
    <ChakraProvider theme={customTheme}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
