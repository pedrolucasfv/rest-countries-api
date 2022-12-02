import CountryCard from '../CountryCard'
import React, { useEffect, useState } from 'react'
import * as S from './styles'

type StateProps = {
  name: {
    common: string
  }
  population: string
  continents: string
  capital: string
  flags: {
    svg: string
  }
}

const CardGroup = () => {
  const [countries, setCountries] = useState<StateProps[]>([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((resp) => resp.json())
      .then((data) => {
        setCountries(data)
      })
  }, [])
  return (
    <S.Wrapper>
      {countries.map((resp) => {
        return (
          <S.Cards key={resp.name.common}>
            <CountryCard
              countryName={resp.name.common}
              population={resp.population}
              region={resp.continents}
              capital={resp.capital}
              countryImage={resp.flags.svg}
            />
          </S.Cards>
        )
      })}
    </S.Wrapper>
  )
}
export default CardGroup
