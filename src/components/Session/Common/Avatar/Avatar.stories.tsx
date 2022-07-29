import AvatarComponent from "./Avatar";
import { ComponentMeta } from "@storybook/react";
import ThemeProvider from "@helpers/ThemeProvider";
import { AiOutlineSearch } from "react-icons/ai";

export function Avatar() {
  return (
    <ThemeProvider>
      <AvatarComponent user={{ login: "John" }} />
    </ThemeProvider>
  );
}

export default {
  title: "Components/Sessions/Common/Avatar",
  Component: Avatar,
};
