import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import Fonts from "@fonts/export";
import { Scrollbar } from "@styles/index";
import { defaultTheme } from "@theme/theme";

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
