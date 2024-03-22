import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@stone-ui-fake/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'http://github.com/leandrosoaresdesouza.png',
    alt: 'Leandro Souza',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
