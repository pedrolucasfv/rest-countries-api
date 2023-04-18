import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10rem;  
  `}
  ${media.greaterThan('huge')`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 5rem;  

  `}
`
type CardsProps = {
  index: number
  limit: number
}
export const Cards = styled.div<CardsProps>`
  ${({ index, limit }) => css`
    width: 30rem;
    margin-bottom: 7rem;
    cursor: pointer;
    text-decoration: none;
    ${index > limit &&
    css`
      display: none;
    `}
  `}
`
