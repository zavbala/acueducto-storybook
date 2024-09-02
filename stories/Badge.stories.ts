import { Badge } from "./Badge";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Example/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Success = {
  args: {
    label: "Success",
    variant: "success",
  },
};

export const Warning = {
  args: {
    label: "Warning",
    variant: "warning",
  },
};

export const Error = {
  args: {
    label: "Error",
    variant: "error",
  },
};
