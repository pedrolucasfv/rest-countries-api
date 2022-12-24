import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CountryInfo from '.'
const color: 'dark' | 'light' = 'light'
const args = {
  name: 'Germany',
  nativeName: 'Deutschland',
  population: '81,770,900',
  region: 'Europe',
  subregion: 'Western Europe',
  capital: 'Berlin',
  currencies: 'Euro',
  topLevelDomain: '.be',
  languages: 'German',
  borderCountries: ['france', 'italy'],
  color: color,
  countrySelect: () => {
    console.log('teste')
  }
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
  it('should render light mode by default', () => {
    const { container } = renderWithTheme(<CountryInfo {...args} />)

    expect(container.firstChild).toHaveStyle({
      color: 'hsl(209, 23%, 22%)'
    })
  })
  it('should render in dark mode', () => {
    const { container } = renderWithTheme(
      <CountryInfo {...args} color="dark" />
    )

    expect(container.firstChild).toHaveStyle({
      color: 'hsl(0, 0%, 100%)'
    })
  })
})

//'hsl(209, 23%, 22%)'
//'hsl(0, 0%, 100%)'
