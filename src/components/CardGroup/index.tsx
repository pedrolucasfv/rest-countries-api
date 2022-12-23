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

export type CardGroupProps = {
  countrySelected: (country: string) => void
  region?: string
  filter?: boolean
}

const CardGroup = ({
  countrySelected,
  region,
  filter = false
}: CardGroupProps) => {
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
          <>
            {!filter && (
              <S.Cards
                key={resp.name.common}
                onClick={() => countrySelected(resp.name.common)}
              >
                <CountryCard
                  countryName={resp.name.common}
                  population={resp.population}
                  region={resp.continents}
                  capital={resp.capital}
                  countryImage={resp.flags.svg}
                />
              </S.Cards>
            )}
            {filter && (
              <>
                {region == resp.continents && (
                  <S.Cards
                    key={resp.name.common}
                    onClick={() => countrySelected(resp.name.common)}
                  >
                    <CountryCard
                      countryName={resp.name.common}
                      population={resp.population}
                      region={resp.continents}
                      capital={resp.capital}
                      countryImage={resp.flags.svg}
                    />
                  </S.Cards>
                )}
              </>
            )}
          </>
        )
      })}
    </S.Wrapper>
  )
}
export default CardGroup
