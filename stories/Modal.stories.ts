import { Modal } from "./Modal";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

export const Default: StoryObj = {
  args: {
    showTrigger: true,
    title: "Modal Title",
    children: "Modal Content",
    description: "Modal Description",
  },
};
