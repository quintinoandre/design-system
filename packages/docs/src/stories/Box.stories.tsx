import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@quintino-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testing the Box element</Text>,
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
