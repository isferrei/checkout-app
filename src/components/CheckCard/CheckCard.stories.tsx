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
    id: "1",
    title: "Anual",
    description: "À Vista",
    fullPrice: "514",
    discountAmmount: "10",
    installments: "12",
    discountPercentage: "0.1",
    checked: "true",
    periodLabel: "mês",
    label: "Anual  |  À Vista",
    price: "De R$ 514,80  |  Por R$ 436,90",
    discount: "-15%",
    value: "-15%",
    onChange: () => {},
  },
} satisfies Story;
