import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray: {
        200: string;
        900: string;
      };
      green: string;
      red: string;
      yellow: string;
    };
    fonts: {
      [key: string]: string;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    green: "#3B912A",
    white: "#FCFCFC",
    black: "#000",
    gray: {
      200: "#F2F2F2",
      900: "#BFBFBF",
    },
    red: "#AE0707",
    yellow: "#E0E90F",
  },
  fonts: {
    Urbanist: '"Urbanist", Verdana, Geneva, Tahoma, sans-serif',
  },
};
