import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { CountryPageProps } from '.'

type WrapperProps = Pick<CountryPageProps, 'color'>

const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
  `,

  dark: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.veryDarkBlue2};
  `
}
export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color }) => css`
    height: 100%;
    ${media.lessThan('medium')`
    display: flex;
      flex-direction: column;
  height: 150rem;
      
    `}
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-rows: 10% 24% 47% 19%;
    grid-template-columns: 10% 34% 12% 34% 10%;
    `}
    ${media.greaterThan('huge')`
    grid-template-rows: 7% 21% 44% 28%;
    grid-template-columns: 12% 33% 12% 31% 12%;
    `}
    ${wrapperModifiers[color](theme)}
  `}
`

export const Menu = styled.div`
  grid-column: 1/6;
  grid-row: 1;
`

export const Info = styled.div`
  ${media.greaterThan('huge')`
  margin-top: 7rem;
  `}
  grid-column: 4;
  grid-row: 3;
  ${media.lessThan('medium')`
    padding-left: 2.5rem
  `}
`
type FlagProps = {
  src: string
}
export const Image = styled.div<FlagProps>`
  ${({ src }) => css`
    height: 100%;
    width: 100%;
    ${media.lessThan('medium')`
    margin: 3.5rem 3rem;
    height: 25rem;
    width: 30rem;
  `}

    background-size: cover;
    background-image: url(${src});
    background-position: center;
  `}
`
export const ImageContent = styled.div`
  ${media.greaterThan('medium')`
    grid-column: 2;
    grid-row: 3;
  `}
`
export const Button = styled.div`
  ${media.lessThan('medium')`
  padding: 3rem 0rem 0rem 3rem;
  `}
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
`
