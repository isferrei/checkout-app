import type { Meta, StoryObj } from "@storybook/react";

import { CardLabels } from "./CardLabels";

const meta = {
  title: "Example/CardLabels",
  component: CardLabels,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default = {
  args: {
    cards: [
      { img: "/assets/elo.png", alt: "card elo" },
      { img: "/assets/visa.png", alt: "card visa" },
    ],
  },
} satisfies Story;
