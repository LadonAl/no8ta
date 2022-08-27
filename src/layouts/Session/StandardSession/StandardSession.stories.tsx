import { ComponentMeta } from "@storybook/react";

import StandardSessionLayout from "./StandardSession";

export function StandardSession() {
  return (
    <StandardSessionLayout>
      <StandardSessionLayout.Header style={{ outline: "dashed pink 2px" }} />
      <StandardSessionLayout.Column style={{ outline: "dashed teal 2px" }} />
      <StandardSessionLayout.Column style={{ outline: "dashed teal 2px" }} />
      <StandardSessionLayout.Column style={{ outline: "dashed teal 2px" }} />
    </StandardSessionLayout>
  );
}

export default {
  title: "Layouts/Sessions/StandardSession",
  component: StandardSession,
} as ComponentMeta<typeof StandardSession>;
