import styled from 'styled-components'

export const Wrapper = styled.main`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
`

export const Title = styled.div``

export const SelectBox = styled.div`
  height: 5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    height: 3rem;
  }
`
export const Items = styled.div`
  padding: 1.5rem;
`

/** &::after {
    content: '';
    position: absolute;
    display: block;
    height: 0.3rem;
    background-color: ${theme.colors.primary};
    animation: hoverAnimation 0.2s forwards;
  }

  @keyframes hoverAnimation {
    from {
      width: 0;
      left: 50%;
    }
    to {
      width: 100%;
      left: 0;
    }
  } 
**/
