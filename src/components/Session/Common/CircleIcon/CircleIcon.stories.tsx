import CircleIconComponent from "./CircleIcon";
import { ComponentMeta } from "@storybook/react";
import ThemeProvider from "@helpers/ThemeProvider";
import { AiOutlineSearch } from "react-icons/ai";

export function CircleIcon() {
  return (
    <ThemeProvider>
      <CircleIconComponent Icon={AiOutlineSearch} color='black' />
    </ThemeProvider>
  );
}

export default {
  title: "Components/Sessions/Common/CircleIcon",
  Component: CircleIcon,
};
