import { Story, Meta } from '@storybook/react'
import CountryInfo, { CountryInfoProps } from '.'

export default {
  title: 'CountryInfo',
  component: CountryInfo
} as Meta

export const Dark: Story<CountryInfoProps> = (args) => <CountryInfo {...args} />

Dark.args = {
  countryName: 'Germany',
  nativeName: 'Deutschland',
  population: '81,770,900',
  capital: 'Berlin',
  region: 'Europe',
  subRegion: 'Western Europe',
  topLevelDomain: '.be',
  currencies: 'Euro',
  languages: 'German',
  borderCountries: 'france',
  color: 'dark'
}

Dark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
export const Light: Story<CountryInfoProps> = (args) => (
  <CountryInfo {...args} />
)

Light.args = {
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
