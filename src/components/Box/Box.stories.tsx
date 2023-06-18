import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";

const meta = {
  title: "Example/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Default = {
  args: {
    variation: "shadow",
    children: "Lorem Ipsum",
  },
} satisfies Story;
