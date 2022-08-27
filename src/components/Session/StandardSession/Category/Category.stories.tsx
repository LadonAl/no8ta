import { ComponentMeta } from "@storybook/react";

import CategoryComponent from "./Category";
import category from "./Category.mock";
import ThemeProvider from "@helpers/ThemeProvider";

export function Category() {
  return (
    <ThemeProvider>
      <CategoryComponent category={category} />
    </ThemeProvider>
  );
}

export default {
  title: "Components/Sessions/StandardSession",
  Component: Category,
};
