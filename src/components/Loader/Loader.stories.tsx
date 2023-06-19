import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

const meta = {
  title: "Example/Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default = {
  args: {},
} satisfies Story;
