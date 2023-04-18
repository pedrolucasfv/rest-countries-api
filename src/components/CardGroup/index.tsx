import { useEffect, useState } from 'react'
import CountryCard, { CountryCardProps } from '../CountryCard'
import * as S from './styles'

export type CardGroupProps = {
  countries: CountryCardProps[]
  region?: string
  filter?: boolean
}

const CardGroup = ({ region, filter = false, countries }: CardGroupProps) => {
  const [limitCards, setLimitCards] = useState(11)
  const [countriesFiltered, setCountriesFiltered] =
    useState<CountryCardProps[]>()

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

  useEffect(() => {
    setLimitCards(11)

    const filter = countries.filter((country) => {
      if (country.region == region) {
        return country
      }
    })
    setCountriesFiltered(filter)
  }, [region, countries])

  return (
    <S.Wrapper>
      {!filter && (
        <>
          {countries.map((resp, index) => {
            return (
              <S.Cards key={index} index={index} limit={limitCards}>
                <CountryCard {...resp} />
              </S.Cards>
            )
          })}
        </>
      )}
      {filter && (
        <>
          {countriesFiltered?.map((resp, index) => {
            return (
              <S.Cards key={index} index={index} limit={limitCards}>
                <CountryCard {...resp} />
              </S.Cards>
            )
          })}
        </>
      )}
      <div id="sentinel" />
    </S.Wrapper>
  )
}
export default CardGroup
