import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@stone-ui-fake/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'As a pattern the heading will ever be `h2` but we can change it with the `as` property',
      },
    },
  },
};
