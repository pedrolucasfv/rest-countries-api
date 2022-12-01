import { screen } from '@testing-library/react'
import countryInfoMocks from '../../components/CountryInfo/mock'
import CountryPage from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  country: countryInfoMocks
}

describe('<CountryPage />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CountryPage {...props} color="light" />)
    //teste menu
    expect(
      screen.getByRole('heading', { name: /where in the world/i })
    ).toBeInTheDocument()
    //teste countryinfo
    expect(
      screen.getByRole('heading', { name: /Germany/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Deutschland')).toBeInTheDocument()
    expect(screen.getByText('Berlin')).toBeInTheDocument()
    expect(screen.getByText('Europe')).toBeInTheDocument()
  })
  it('should render light mode by default', () => {
    const { container } = renderWithTheme(
      <CountryPage {...props} color="light" />
    )

    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'hsl(0, 0%, 100%)'
    })
  })
  it('should render in dark mode', () => {
    const { container } = renderWithTheme(
      <CountryPage {...props} color="dark" />
    )

    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'hsl(200, 15%, 8%)'
    })
  })
})
