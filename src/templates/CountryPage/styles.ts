import styled, { css, DefaultTheme } from 'styled-components'
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
    display: grid;
    height: 100%;
    grid-template-rows: 7% 21% 44% 28%;
    grid-template-columns: 7% 40% 12% 41%;
    ${wrapperModifiers[color](theme)}
  `}
`

export const Menu = styled.div`
  grid-column: 1/5;
  grid-row: 1;
`

export const Info = styled.div`
  margin-top: 7rem;
  grid-column: 4;
  grid-row: 3;
`
type FlagProps = {
  src: string
}
export const Image = styled.div<FlagProps>`
  ${({ src }) => css`
    height: 100%rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    grid-column: 2;
    grid-row: 3;
  `}
`

export const Button = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
`
