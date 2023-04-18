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
  display: flex;
`

export const Title = styled.div``

export const SelectBox = styled.div<ColorProps & ItemsProps>`
  ${({ color, theme, isOpen }) => css`
    height: 5rem;
    padding: 1.5rem 1rem;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.4rem;

    ${wrapperModifiers[color](theme)}
    svg {
      padding-inline: 1rem;
      height: 3rem;
      transition: rotate 1s;
      rotate: ${isOpen ? '0deg' : '180deg'};
    }
  `}
`

type ItemsProps = {
  isOpen: boolean
}

export const Items = styled.div<ItemsProps>`
  ${({ isOpen, theme }) => css`
    border: 0.1rem solid ${theme.colors.white};
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: width 1s;
    width: ${isOpen ? '0rem' : '65rem'};
  `}
`
export const Clear = styled.div<ColorProps>`
  ${({ color, theme }) => css`
    ${color == 'dark' &&
    css`
      color: ${theme.colors.white};
    `}
    ${color == 'light' &&
    css`
      color: ${theme.colors.darkBlue};
    `}
    margin-left: 3rem;
  `}
`

export const Item = styled.div<ColorProps>`
  ${({ color, theme }) => css`
    ${wrapperModifiers[color](theme)};
    padding: 0.5rem 1.5rem;
    margin-inline: 0.5rem;
  `}
`
