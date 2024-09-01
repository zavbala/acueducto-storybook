import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = {
  args: {
    size: [56, 56],
  },
};
