import { Story, Meta } from '@storybook/react'
import CountryInfo, { CountryInfoProps } from '.'

export default {
  title: 'CountryInfo',
  component: CountryInfo,
  args: {
    countryName: 'Germany',
    nativeName: 'Deutschland',
    population: '81,770,900',
    capital: 'Berlin',
    region: 'Europe',
    subRegion: 'Western Europe',
    topLevelDomain: '.be',
    currencies: 'Euro',
    languages: 'German',
    borderCountries: 'france'
  }
} as Meta

export const Default: Story<CountryInfoProps> = (args) => (
  <CountryInfo {...args} />
)
