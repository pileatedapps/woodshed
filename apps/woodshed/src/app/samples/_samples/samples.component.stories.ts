import type { Meta, StoryObj } from '@storybook/angular';
import { SamplesComponent } from './samples.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SamplesComponent> = {
  component: SamplesComponent,
  title: 'SamplesComponent',
};
export default meta;
type Story = StoryObj<SamplesComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/samples works!/gi)).toBeTruthy();
  },
};
