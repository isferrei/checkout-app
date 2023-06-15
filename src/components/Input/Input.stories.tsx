import type { Meta, StoryObj } from "@storybook/react";

import type { InputProps } from "./index";
import { Input } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

export const Default = {
  args: {
    placeholder: "DD/MM/AAAA",
    onChange: () => null,
    mask: "99/99/9999",
    type: "text",
  },
} satisfies Story;
