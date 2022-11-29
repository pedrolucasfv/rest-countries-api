import styled from 'styled-components'
import { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  color: 'light' | 'dark'
}

const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.darkBlue};
  `,
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ color, theme }) => css`
    font-size: 1.5rem;
    span {
      font-weight: 649;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${wrapperModifiers[color](theme)};
  `}
`

export const CountryName = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 2rem;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
  flex-wrap: wrap;
  height: 17rem;
  `}

  line-height: 2;
`

export const NativeName = styled.div``
export const Population = styled.div``
export const Region = styled.div``
export const SubRegion = styled.div``
export const Capital = styled.div``
export const TopLevelDomain = styled.div``
export const Currencies = styled.div``
export const Languages = styled.div``
export const BorderCountries = styled.div`
  display: flex;
  margin-top: 4rem;
`
