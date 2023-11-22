import type { Meta, StoryObj } from '@storybook/react';

import { TabPanel } from '../app/components/tab-panel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tab Panel',
  component: TabPanel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    selectedIndex: { control: 'number' },
  },
} satisfies Meta<typeof TabPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    tabs: [ {label: 'A'}, {label: 'B'}, {label: 'C'}],
    panels: [{ content: 'Lorem A' }, { content: 'Lorem B' }, { content: 'Lorem C' }],
    selectedIndex: 1
  },
};
