import type { Meta, StoryObj } from '@storybook/react';
import { TextArea, TextAreaProps } from '@stone-ui-fake/react';

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Tell me about yourself',
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Tell me about yourself',
  },
};
