import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    expect(
      screen.getByRole('heading', { name: /where in the world/i })
    ).toBeInTheDocument()
  })
})
