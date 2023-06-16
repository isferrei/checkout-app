import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
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
