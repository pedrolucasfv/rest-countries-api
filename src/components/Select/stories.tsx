import { Story, Meta } from '@storybook/react'
import Select, { SelectProps } from '.'

export default {
  title: 'Select',
  component: Select,
  args: {
    title: 'Filter By Region',
    items: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  }
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />
