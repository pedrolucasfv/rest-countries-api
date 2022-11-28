import { Story, Meta } from '@storybook/react'
import CountryCard, { CountryCardProps } from '.'

export default {
  title: 'CountryCard',
  component: CountryCard,
  args: {
    countryName: 'Germany',
    population: '81,770,900',
    capital: 'Berlin',
    region: 'Europe',
    countryImage: '/img/flag-germany.png'
  }
} as Meta

export const Default: Story<CountryCardProps> = (args) => (
  <CountryCard {...args} />
)
