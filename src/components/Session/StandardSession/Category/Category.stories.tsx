import CategoryComponent from "./Category";
import { ComponentMeta } from "@storybook/react";
import ThemeProvider from "@helpers/ThemeProvider";

import category from "./Category.mock";

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
