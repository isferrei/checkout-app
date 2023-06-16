import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "./Form";

const meta = {
  label: "Número de parcelas",
  options: [],
  placeholder: "Selecionar",
  onSelect: () => {},
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
