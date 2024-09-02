import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta = {
  title: "Example/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Table>;

export default meta;

export const Default: StoryObj = {
  args: {
    cols: ["Column 1", "Column 2", "Column 3", ""],
    rows: [
      ["Row 1, Column 1", "Row 1, Column 2", "Row 1, Column 3"],
      ["Row 2, Column 1", "Row 2, Column 2", "Row 2, Column 3"],
      ["Row 3, Column 1", "Row 3, Column 2", "Row 3, Column 3"],
    ],
  },
};

export const Loading: StoryObj = {
  args: {
    loading: true,
  },
};
