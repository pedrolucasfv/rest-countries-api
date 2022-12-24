import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Select from '.'

const args = {
  title: 'Filter By Region',
  items: ['Africa', 'America', 'Asia'],
  regionSelected: () => {
    console.log('kk')
  }
}

describe('<Select />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Select {...args} />)

    expect(
      screen.getByRole('heading', { name: /Filter By Region/i })
    ).toBeInTheDocument()
  })
  it('should render light mode by default', () => {
    const { container } = renderWithTheme(<Select {...args} />)

    expect(container.firstChild?.firstChild).toHaveStyle({
      backgroundColor: 'hsl(0, 0%, 100%)',
      color: 'hsl(209, 23%, 22%)'
    })
  })
  it('should render in the dark mode', () => {
    const { container } = renderWithTheme(<Select {...args} color="dark" />)

    expect(container.firstChild?.firstChild).toHaveStyle({
      backgroundColor: 'hsl(209, 23%, 22%)',
      color: 'hsl(0, 0%, 100%)'
    })
  })
})

/*     PARA FAZER O TESTE DE CLICK
it('should render in the dark mode', () => {
  const { container } = renderWithTheme(<Select {...args} color="dark" />)

  fireEvent.click(screen.getByRole('heading', /filter by region/i))
  expect(element.getAttribute('aria-hidden')).toBe('true')
})
*/
