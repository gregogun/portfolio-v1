import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xxl: "100em",
});

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        scrollBehavior: "smooth",
        color: props.colorMode === "light" ? "default.dark" : "default.light",
        bg: props.colorMode === "light" ? "#fcfcfc" : "#232323",
        fontFamily: "body",
      },
    }),
  },
  colors: {
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
      600: "#5a5959",
      700: "#423f3f",
      800: "#2a2525",
      900: "#17080d",
    },
    brand: {
      primary: {
        50: "#f2e9ff",
        100: "#d4c3f2",
        200: "#b69de4",
        300: "#9975d7",
        400: "#7b4ecb",
        500: "#6234b1",
      },
      secondary: {
        50: "#defef6",
        100: "#b8f5e2",
        200: "#90edcc",
        300: "#65e4b5",
        400: "#3cdd9a",
        500: "#22c38c",
        600: "#169875",
        700: "#0a6c5a",
        800: "#00423b",
        900: "#001812",
      },
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto Mono, monospace",
  },
  breakpoints,
});

export default theme;
