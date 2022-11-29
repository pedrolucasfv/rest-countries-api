import { render, screen } from '@testing-library/react'

import Select from '.'

const args = {
  title: 'Filter By Region',
  items: ['Africa', 'America', 'Asia']
}

describe('<Select />', () => {
  it('should render the heading', () => {
    render(<Select {...args} />)

    expect(
      screen.getByRole('heading', { name: /Filter By Region/i })
    ).toBeInTheDocument()
  })
})
