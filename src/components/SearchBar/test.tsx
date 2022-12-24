import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SearchBar from '.'

describe('<SearchBar />', () => {
  it('Renders without Label', () => {
    renderWithTheme(<SearchBar color="light" />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
})

/** 
it('Renders with Label', () => {
  renderWithTheme(<SearchBar label="Label" name="Label" />)

  expect(screen.getByLabelText('Label')).toBeInTheDocument()
})

*/
