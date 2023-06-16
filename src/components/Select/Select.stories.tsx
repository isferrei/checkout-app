import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default = {
  args: {
    placeholder: "Selecione um item",
    options: [
      { value: "fox", label: "🦊 Fox" },
      { value: "Butterfly", label: "🦋 Butterfly" },
      { value: "Honeybee", label: "🐝 Honeybee" },
    ],
    onSelect: (selected: any) => console.log("Selected:", selected),
  },
} satisfies Story;
