import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Input",
  },
} satisfies Meta<typeof Input>;

export default meta;

export const Primary: StoryObj<typeof meta> = {};
