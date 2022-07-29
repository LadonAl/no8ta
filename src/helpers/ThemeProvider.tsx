import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@theme/theme";
import { ReactNode } from "react";
import Fonts from "@fonts/export";
import { Scrollbar } from "@styles/index";

interface Props {
  children?: ReactNode;
}

export default function ({ children }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Fonts />
      <Scrollbar />
      {children}
    </ThemeProvider>
  );
}
