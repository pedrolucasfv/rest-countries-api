import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon?: boolean
} & Pick<ButtonProps, 'color' | 'minimal'>

const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.veryDarkBlue};
    height: ${theme.spacings.xxlarge};
    font-size: ${theme.font.sizes.small};
  `,
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.veryDarkBlue};
    color: ${theme.colors.white};
    border: 0.2rem solid ${theme.colors.white};
    height: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.large};
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.white};
    border: none;
    &:hover {
      color: ${theme.colors.veryDarkBlue2};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, hasIcon, minimal }) => css`
    padding: 1rem 4.2rem;
    display: flex;
    letter-spacing: 0.3rem;
    font-weight: 600;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 0.8rem;
    text-decoration: none;
    ${!!color && wrapperModifiers[color](theme)};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
  `}
`
