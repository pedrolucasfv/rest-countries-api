import Button from 'components/Button'
import * as S from './styles'

export type CountryInfoProps = {
  name: string
  nativeName: string
  population: string
  region: string
  subregion: string
  capital: string
  topLevelDomain: string
  currencies: string
  languages: string
  borderCountries: string[]
  color?: 'dark' | 'light'
  countrySelect: (country: string, alpha: boolean) => void
}

const CountryInfo = ({
  capital,
  name,
  currencies,
  languages,
  population,
  region,
  subregion,
  topLevelDomain,
  nativeName,
  borderCountries,
  color = 'light',
  countrySelect
}: CountryInfoProps) => (
  <S.Wrapper color={color}>
    <S.CountryName>{name}</S.CountryName>
    <S.Info>
      <S.NativeName>
        <span>Native Name: </span>
        {nativeName}
      </S.NativeName>
      <S.Population>
        <span>Population: </span>
        {population}
      </S.Population>
      <S.Region>
        <span>Region: </span>
        {region}
      </S.Region>
      <S.SubRegion>
        <span>Sub Region: </span>
        {subregion}
      </S.SubRegion>
      <S.Capital>
        <span>Capital: </span>
        {capital}
      </S.Capital>
      <S.TopLevelDomain>
        <span>Top Level Domain: </span>
        {topLevelDomain}
      </S.TopLevelDomain>
      <S.Currencies>
        <span>Currencies: </span>
        {currencies}
      </S.Currencies>
      <S.Languages>
        <span>Languages: </span>
        {languages}
      </S.Languages>
    </S.Info>
    <S.BorderCountries>
      <span>BorderCountries: </span>
      {borderCountries ? (
        borderCountries.map((item, index) => {
          return (
            <div key={index} onClick={() => countrySelect(item, true)}>
              {color == 'light' && <Button color="light">{item}</Button>}
              {color == 'dark' && <Button color="dark">{item}</Button>}
            </div>
          )
        })
      ) : (
        <p>{'No border countries here'}</p>
      )}
    </S.BorderCountries>
  </S.Wrapper>
)

export default CountryInfo
