import { ComponentMeta } from "@storybook/react";
import { AiOutlineSearch } from "react-icons/ai";

import CircleIconComponent from "./CircleIcon";
import ThemeProvider from "@helpers/ThemeProvider";

export function CircleIcon() {
  return (
    <ThemeProvider>
      <CircleIconComponent Icon={AiOutlineSearch} color="black" />
    </ThemeProvider>
  );
}

export default {
  title: "Components/Sessions/Common/CircleIcon",
  Component: CircleIcon,
};
