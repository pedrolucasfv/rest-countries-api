import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
