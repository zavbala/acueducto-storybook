import { Paginator } from "./Paginator";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Paginator",
  component: Paginator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Paginator>;

export default meta;

export const Default = {
  args: {
    perPage: 10,
    totalPages: 7,
    currentPage: 4,
    onChange: () => {},
  },
} as StoryObj<typeof Paginator>;
