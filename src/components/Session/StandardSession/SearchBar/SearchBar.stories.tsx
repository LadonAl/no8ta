import SearchBarComponent from "./SearchBar";
import { ComponentMeta } from "@storybook/react";
import ThemeProvider from "@helpers/ThemeProvider";

export function SearchBar() {
  return (
    <ThemeProvider>
      <SearchBarComponent w='100%' />
    </ThemeProvider>
  );
}

export default {
  title: "Components/Sessions/StandardSession/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;
