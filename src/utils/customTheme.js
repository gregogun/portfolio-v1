import { theme } from "@chakra-ui/react";

const customTheme = {
  ...theme,
  styles: {
    global: (props) => ({
      "html body": {
        overflowX: "hidden",
        color: props.colorMode === "light" ? "default.dark" : "default.light",
        bg: props.colorMode === "light" ? "#fcfcfc" : "#232323",
        fontFamily: "body",
      },
    }),
  },
  colors: {
    ...theme.colors,
    default: {
      light: "#FCFCFC",
      dark: "#232323",
    },
    neutral: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Space Mono, sans-serif",
  },
};

export default customTheme;
