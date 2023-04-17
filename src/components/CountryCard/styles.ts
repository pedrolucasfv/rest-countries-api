import styled, { css, DefaultTheme } from 'styled-components'
import theme from 'styles/theme'

type WrapperProps = {
  color?: 'light' | 'dark'
}
const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkBlue};
  `,
  dark: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
  `
}
export const Wrapper = styled.a<WrapperProps>`
  ${({ color }) => css`
    display: flex;
    flex-direction: column;
    ${color && wrapperModifiers[color](theme)};
    text-decoration: none;
  `}
`

export const CountryImage = styled.div`
  height: 20rem;
  position: relative;
`
export const Info = styled.div`
  padding: 2rem;
  font-size: 1.4rem;
  span {
    font-weight: 649;
  }
`
export const CountryName = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
`
export const Population = styled.div``
export const Capital = styled.div``
