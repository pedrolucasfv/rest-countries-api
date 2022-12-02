import { Story, Meta } from '@storybook/react'
import Select, { SelectProps } from '.'
import items from './mock'

export default {
  title: 'Select',
  component: Select,
  args: {
    items
  }
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />
