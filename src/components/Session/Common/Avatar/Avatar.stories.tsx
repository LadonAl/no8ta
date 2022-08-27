import { ComponentMeta } from "@storybook/react";
import { AiOutlineSearch } from "react-icons/ai";

import AvatarComponent from "./Avatar";
import ThemeProvider from "@helpers/ThemeProvider";

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
