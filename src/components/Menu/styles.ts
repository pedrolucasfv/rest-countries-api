import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  color: 'light' | 'dark'
}

const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkBlue};
    box-shadow: 0px 1px 6px #505050;
  `,
  dark: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    box-shadow: 0px 1px 6px #111;
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    ${wrapperModifiers[color](theme)}
  `}
`

export const Logo = styled.h2`
  font-size: 2.2rem;
`

export const Button = styled.div``
