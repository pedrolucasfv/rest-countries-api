import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`

export const Logo = styled.h2`
  font-size: 2.2rem;
`
