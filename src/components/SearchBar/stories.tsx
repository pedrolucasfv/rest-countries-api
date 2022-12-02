import { Story, Meta } from '@storybook/react'
import SearchBar, { SearchBarProps } from '.'

export default {
  title: 'SearchBar',
  component: SearchBar,
  args: {
    label: 'Search',
    name: 'search',
    initialValue: 'Search for countries',
    color: 'light'
  }
} as Meta

export const Default: Story<SearchBarProps> = (args) => <SearchBar {...args} />
