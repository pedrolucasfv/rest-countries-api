import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

const args = {
  changeColor: () => {
    console.log('teste')
  }
}
describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu {...args} />)

    expect(
      screen.getByRole('button', { name: /where in the world/i })
    ).toBeInTheDocument()
  })
  it('should render light mode by default', () => {
    const { container } = renderWithTheme(<Menu {...args} />)

    expect(container.firstChild).toHaveStyle({
      color: 'hsl(209, 23%, 22%)'
    })
  })
  it('should render in dark mode', () => {
    const { container } = renderWithTheme(<Menu color="dark" {...args} />)

    expect(container.firstChild).toHaveStyle({
      color: 'hsl(0, 0%, 100%)'
    })
  })
})
