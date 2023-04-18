import { useEffect, useState } from 'react'
import CountryCard, { CountryCardProps } from '../CountryCard'
import * as S from './styles'

export type CardGroupProps = {
  countries: CountryCardProps[]
}

const CardGroup = ({ countries }: CardGroupProps) => {
  const [limitCards, setLimitCards] = useState(11)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setLimitCards((limitCards) => limitCards + 6)
      }
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    intersectionObserver.observe(document.querySelector('#sentinel')!)
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <S.Wrapper>
      {countries.map((resp, index) => {
        return (
          <S.Cards key={index} index={index} limit={limitCards}>
            <CountryCard {...resp} />
          </S.Cards>
        )
      })}
      <div id="sentinel" />
    </S.Wrapper>
  )
}
export default CardGroup
