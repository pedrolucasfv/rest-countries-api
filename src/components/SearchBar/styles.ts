import styled, { css, DefaultTheme } from 'styled-components'

type ColorProps = {
  color: 'light' | 'dark'
}

const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    svg {
      color: ${theme.colors.darkBlue};
    }
  `,
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkBlue};
    color: red;
    svg {
      color: ${theme.colors.white};
    }
  `
}
export const InputWrapper = styled.div<ColorProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;

    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    ${color && wrapperModifiers[color](theme)}
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.veryDarkBlue2};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.veryDarkBlue2};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.darkBlue}
        inset;
      filter: none;
      &::first-line {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};

    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`

export const Wrapper = styled.div``
