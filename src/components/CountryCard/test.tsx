import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CountryCard from '.'

const args = {
  countryName: 'Germany',
  population: '81,770,900',
  capital: 'Berlin',
  region: 'Europe',
  countryImage: '/img/flag-germany.png'
}

describe('<CountryCard />', () => {
  it('should render the info of country', () => {
    renderWithTheme(<CountryCard {...args} color="light" />)

    expect(
      screen.getByRole('heading', { name: /germany/i })
    ).toBeInTheDocument()
  })
  it('should render the light mode by default', () => {
    const { container } = renderWithTheme(<CountryCard {...args} />)

    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'hsl(0, 0%, 100%)',
      color: 'hsl(209, 23%, 22%)'
    })
  })
  it('should render with dark mode', () => {
    const { container } = renderWithTheme(
      <CountryCard {...args} color="dark" />
    )

    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'hsl(209, 23%, 22%)',
      color: 'hsl(0, 0%, 100%)'
    })
  })
})
