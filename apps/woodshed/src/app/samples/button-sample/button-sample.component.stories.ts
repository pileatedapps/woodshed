import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonSampleComponent } from './button-sample.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonSampleComponent> = {
  component: ButtonSampleComponent,
  title: 'ButtonSampleComponent'
};
export default meta;
type Story = StoryObj<ButtonSampleComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button-sample works!/gi)).toBeTruthy();
  }
};
