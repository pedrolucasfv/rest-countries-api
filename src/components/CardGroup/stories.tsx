import { Story, Meta } from '@storybook/react'
import CardGroup, { CardGroupProps } from '.'

export default {
  title: 'CardGroup',
  component: CardGroup,
  args: {}
} as Meta

export const Default: Story<CardGroupProps> = (args) => <CardGroup {...args} />
