import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "./Form";

const mockInstallments = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
];

const meta = {
  title: "Example/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default = {
  args: {
    installments: mockInstallments,
    onSubmit: () => {},
  },
} satisfies Story;
