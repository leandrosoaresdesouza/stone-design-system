import type { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from '@stone-ui/react';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Type your name',
  },
};
