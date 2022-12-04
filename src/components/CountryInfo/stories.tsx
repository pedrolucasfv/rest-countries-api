import { Story, Meta } from '@storybook/react'
import CountryInfo, { CountryInfoProps } from '.'
import items from './mock'
export default {
  title: 'CountryInfo',
  component: CountryInfo,
  args: {
    ...items
  }
} as Meta

export const Dark: Story<CountryInfoProps> = (args) => (
  <CountryInfo {...args} color="dark" />
)

Dark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
export const Light: Story<CountryInfoProps> = (args) => (
  <CountryInfo {...args} />
)
