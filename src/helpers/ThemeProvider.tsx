import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@theme/theme";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function ({ children }: Props) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
