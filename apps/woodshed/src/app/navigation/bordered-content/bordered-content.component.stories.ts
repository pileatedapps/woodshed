import type { Meta, StoryObj } from '@storybook/angular';
import { BorderedContentComponent } from './bordered-content.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BorderedContentComponent> = {
  component: BorderedContentComponent,
  title: 'BorderedContentComponent',
};
export default meta;
type Story = StoryObj<BorderedContentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/bordered-content works!/gi)).toBeTruthy();
  },
};
