import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default = {
  args: {
    placeholder: "DD/MM/AAAA",
    onChange: () => null,
    mask: "99/99/9999",
    type: "text",
  },
} satisfies Story;
