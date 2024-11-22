import type { Meta, StoryObj } from '@storybook/angular';
import { LoadingBarComponent } from './loading-bar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LoadingBarComponent> = {
  component: LoadingBarComponent,
  title: 'LoadingBarComponent',
};
export default meta;
type Story = StoryObj<LoadingBarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/loading-bar works!/gi)).toBeTruthy();
  },
};
