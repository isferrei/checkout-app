import type { Meta, StoryObj } from "@storybook/react";

import { CheckCard } from "./CheckCard";

const meta = {
  title: "Example/CheckCard",
  component: CheckCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default = {
  args: {
    label: "Anual  |  À Vista",
    price: "De R$ 514,80  |  Por R$ 436,90",
    description: "10x de R$ 43,69/mês",
    discount: "-15%",
    value: "-15%",
    onChange: () => {},
    checked: false,
  },
} satisfies Story;
