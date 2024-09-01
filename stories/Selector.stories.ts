import { Selector } from "./Selector";
import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Example/Selector",
  component: Selector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: () => {} },
} satisfies Meta<typeof Selector>;

export default meta;

export const Primary = {
  args: {
    label: "Selector",
  },
};
