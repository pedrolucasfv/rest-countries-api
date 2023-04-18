import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type ColorProps = {
  color: 'light' | 'dark'
}

type isOpenProps = {
  isOpen: boolean
}
const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    background: ${theme.colors.lightBg};
  `,
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.veryDarkBlue2};
  `
}
export const Wrapper = styled.main<ColorProps>`
  ${({ theme, color }) => css`
    ${color && wrapperModifiers[color](theme)};
  `}
`

export const Menu = styled.div``

export const SelectRegion = styled.div``

export const SearchBar = styled.div`
  margin-bottom: 2rem;
`

export const CardGroup = styled.div`
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  padding: 0 6rem;
`

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
  margin: 3rem 0;
`
export const Button = styled.a<isOpenProps>`
  ${({ theme, color, isOpen }) => css`
    position: fixed;
    right: 2%;
    bottom: 5%;
    border-radius: 2rem;
    transition: transform 1s;
    transform: ${isOpen ? 'translateX(0)' : 'translateX(30rem)'};

    ${color == 'dark' &&
    css`
      border: 0.5rem solid ${theme.colors.darkBlue};
      background-color: ${theme.colors.veryDarkBlue2};
      color: ${theme.colors.white};
    `}
    ${color == 'light' &&
    css`
      border: 0.5rem solid ${theme.colors.white};
      background-color: ${theme.colors.lightBg};
    `}
    
    box-shadow: inset 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      inset 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      inset 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
      3px 0px 1px -2px rgba(0, 0, 0, 0.2), 2px 0px 2px 0px rgba(0, 0, 0, 0.14),
      1px 0px 5px 0px rgba(0, 0, 0, 0.12);
    font-size: 2rem;
    padding: 1.5rem;
    font-weight: 600;
    cursor: pointer;
  `}
`
