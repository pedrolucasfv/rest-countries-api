import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CountryInfo from '.'

const args = {
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

describe('<CountryInfo />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CountryInfo {...args} />)

    expect(
      screen.getByRole('heading', { name: /Germany/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Deutschland')).toBeInTheDocument()
    expect(screen.getByText('Berlin')).toBeInTheDocument()
    expect(screen.getByText('Europe')).toBeInTheDocument()
  })
})
