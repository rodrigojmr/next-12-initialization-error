import { animation } from "@twind/react";
import { apply, Theme, ThemeResolver } from "twind";
import { css } from "twind/css";
import * as colors from "twind/colors";

export const globalBg = apply`bg-gray-70`;
export const sectionHeading = apply`text(2xl md:3xl) font-bold text-gray-700 mb-3`;

export const chosenGreen = `seagreen`;

export const pulse = animation(".2s ease-in-out", {
  from: {
    transform: "scale3d(1, 1, 1)",
  },
  "50%": {
    transform: "scale3d(1.05, 1.05, 1.05)",
  },
  to: {
    transform: "scale3d(1, 1, 1)",
  },
});

export const fadeout = animation(".5s ease-in-out", {
  "0%": {
    transform: "scale(0.8)",
    // height: "80%",
    // width: "80%",
    opacity: 0.35,
  },
  "100%": {
    transform: "scale(2)",
    opacity: 0,
  },
});

export const click = animation(".1s ease", {
  "0&": {
    transform: "translate(0px)",
  },
  "50%%": {
    transform: "translateY(-2px)",
  },
  "100%%": {
    transform: "translateY(-0px)",
  },
});

export const growIn = animation(".3s cubic-bezier(.34,1.26,.82,.92)", {
  "0%": {
    transform: "scale(0)",
  },
  "100%": {
    transform: "scale(1)",
  },
});

export const hoverScale = `transform transition duration-300 hover:scale-105`;

export const productCardHighlightText = css({
  border: "2px solid green",
  "& .product-text > *:first-child": apply`text-newGreen-500`,
  "& .product-text > p": apply`text-newGreen-400`,
});

export const theme = {
  fontFamily: { sans: ["Montserrat"], secondary: ["Gotham"] },
  colors: {
    ...colors,
    transparent: "transparent",
    current: "currentColor",
    gray: {
      "50": "#f7f9f8",
      "70": "#eff5f7",
      "100": "#ebf1f4",
      "200": "#d2dfe8",
      "300": "#a7becb",
      "400": "#7397a6",
      "500": "#587684",
      "600": "#475b66",
      "700": "#37444d",
      "800": "#262e36",
      "900": "#171c23",
    },
    red: colors.red,
    blue: colors.lightBlue,
    yellow: colors.amber,
    primary: {
      logo: "#446C52",
      saturated: "#67A147",
      dark: "#35542F",
      light: "#EDF2B0",
    },
    yellowLight: "#F4E9BD",
    blueLight: "#D3E6E9",
    lightBlueGrey: "#e9f1f2",
    bg: "#EDF7EA",
    greenAlt: {
      50: "#f7f7f2",
      100: "#edf0d1",
      200: "#d4e49f",
      300: "#a4c768",
      400: "#67a147",
      500: "#42881f",
      600: "#357015",
      700: "#2c5513",
      800: "#1f3a10",
      900: "#16230d",
    },
    newGreen: {
      "50": "#F5F7F2",
      "100": "#E8F0D9",
      "200": "#CAE5B0",
      "300": "#97C877",
      "400": "#72B162",
      "500": "#378B29",
      "600": "#2D731B",
      "700": "#275817",
      "800": "#1C3C13",
      "900": "#132411",
    },
    greenTwo: {
      "50": "#105102106",
      "100": "#f6faf5",
      "200": "#d4e7cf",
      "300": "#b2d5aa",
      "400": "#94c487",
      "500": "#72b162",
      "600": "#579348",
      "700": "#416d36",
      "800": "#2b4823",
      "900": "#142211",
    },
    seagreen: {
      50: "#f5f8f6",
      100: "#e6f0ed",
      200: "#c6e3d6",
      300: "#92c5ac",
      400: "#52a27e",
      500: "#3a8455",
      600: "#446c52",
      700: "#285131",
      800: "#1d3725",
      900: "#13211a",
    },
    seagreen2: {
      50: "#f6f9f7",
      100: "#ecf3ef",
      200: "#dae7de",
      300: "#b7d1c0",
      400: "#8fb79d",
      500: "#639c77",
      600: "#507c5f",
      700: "#3e604a",
      800: "#324e3c",
      900: "#2e4837",
    },
    palegreen: {
      50: "#f7f8f2",
      100: "#eef0d3",
      200: "#d7e3a1",
      300: "#a8c56b",
      400: "#6e9e4e",
      500: "#488521",
      600: "#3a6e16",
      700: "#2f5314",
      800: "#213911",
      900: "#17230e",
    },
    teal: {
      50: "#f2f7f7",
      100: "#d7f0f7",
      200: "#a8e3ed",
      300: "#71c7d5",
      400: "#37a5b6",
      500: "#278797",
      600: "#226e7c",
      700: "#1e5360",
      800: "#163945",
      900: "#0e2330",
    },
    denim: {
      50: "#f4f8fa",
      100: "#dcf0fb",
      200: "#b5dff6",
      300: "#83c0e9",
      400: "#509bd7",
      500: "#3c79c6",
      600: "#325eb0",
      700: "#29478d",
      800: "#1d3065",
      900: "#111d41",
    },
    royalblue: {
      50: "#f6f9fb",
      100: "#e2f0fc",
      200: "#c2dbfa",
      300: "#98b8f1",
      400: "#7091e7",
      500: "#596cde",
      600: "#4950ce",
      700: "#383cad",
      800: "#27297f",
      900: "#161950",
    },
    indigo: {
      50: "#f8fafb",
      100: "#e9f0fc",
      200: "#d2d7f9",
      300: "#aeb2f1",
      400: "#9189e6",
      500: "#7964de",
      600: "#6348ce",
      700: "#4b36ac",
      800: "#34257d",
      900: "#1d174d",
    },
    orchid: {
      50: "#fcfbfb",
      100: "#f8eff7",
      200: "#f0cfef",
      300: "#e1a4db",
      400: "#da77c3",
      500: "#c952af",
      600: "#af3891",
      700: "#872a6d",
      800: "#601d48",
      900: "#381327",
    },
    blush: {
      50: "#fdfcfb",
      100: "#fbf0ef",
      200: "#f7cede",
      300: "#eda1bb",
      400: "#ea7195",
      500: "#dd4d74",
      600: "#c63454",
      700: "#9f273d",
      800: "#731b28",
      900: "#461116",
    },
    sunset: {
      50: "#fcfbf9",
      100: "#faf0df",
      200: "#f6d5bd",
      300: "#e8ab8c",
      400: "#de7d5d",
      500: "#cb5a3b",
      600: "#af4027",
      700: "#88301e",
      800: "#5f2116",
      900: "#3b140e",
    },
    chocolate: {
      50: "#fcfaf6",
      100: "#f9f0cc",
      200: "#f3da99",
      300: "#e1b464",
      400: "#cc883a",
      500: "#b1671f",
      600: "#934d14",
      700: "#703911",
      800: "#4d270e",
      900: "#32180a",
    },
  },
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
  boxShadow: (theme: ThemeResolver) => ({
    highlighted: `0px 0px 2px 4px ${theme("colors.chocolate.200")}`,
  }),
  screens: {
    standalone: { raw: "(display-mode:standalone)" },
    mdlg: "1110px",
  },
};
