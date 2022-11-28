import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render label with light color by default', () => {
    renderWithTheme(<Button>back</Button>)
    expect(screen.getByRole('button', { name: /back/i })).toHaveStyle({
      background: 'hsl(0, 0%, 100%)',
      color: 'hsl(207, 26%, 17%)'
    })
  })
  it('should render label with light color by default', () => {
    renderWithTheme(<Button color="dark">back</Button>)
    expect(screen.getByRole('button', { name: /back/i })).toHaveStyle({
      background: 'hsl(207, 26%, 17%)',
      color: 'hsl(0, 0%, 100%)'
    })
  })
})
