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
})

/*     PARA FAZER O TESTE DE CLICK
it('should render in the dark mode', () => {
  const { container } = renderWithTheme(<Select {...args} color="dark" />)

  fireEvent.click(screen.getByRole('heading', /filter by region/i))
  expect(element.getAttribute('aria-hidden')).toBe('true')
})
*/
