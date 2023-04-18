import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type ColorProps = {
  color: 'light' | 'dark'
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

export const SearchBar = styled.div``

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
