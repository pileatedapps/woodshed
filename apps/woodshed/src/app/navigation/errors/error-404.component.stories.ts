import type { Meta, StoryObj } from '@storybook/angular';
import { Error404Component } from './error-404.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<Error404Component> = {
  component: Error404Component,
  title: 'Error404Component'
};
export default meta;
type Story = StoryObj<Error404Component>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/error-404 works!/gi)).toBeTruthy();
  }
};
