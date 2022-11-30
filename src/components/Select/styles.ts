import styled, { css, DefaultTheme } from 'styled-components'

type ColorProps = {
  color: 'light' | 'dark'
}

const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.darkBlue};
    background-color: ${theme.colors.white};
  `,
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkBlue};
  `
}

export const Wrapper = styled.main`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
`

export const Title = styled.div``

export const SelectBox = styled.div<ColorProps>`
  ${({ color, theme }) => css`
    height: 5rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.4rem;

    ${wrapperModifiers[color](theme)}
    svg {
      height: 3rem;
    }
  `}
`
export const Items = styled.div<ColorProps>`
  ${({ color, theme }) => css`
    margin-top: 0.5rem;
    padding: 1.5rem;
    ${wrapperModifiers[color](theme)}
    animation: clickAnimation 0.3s forwards;

    @keyframes clickAnimation {
      from {
        height: 0;
      }
      to {
        height: 17rem;
      }
    }
  `}
`
