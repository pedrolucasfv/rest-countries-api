import Button from 'components/Button'
import * as S from './styles'

export type CountryInfoProps = {
  countryName: string
  nativeName: string
  population: string
  region: string
  subregion: string
  capital: string
  topLevelDomain: string
  currencies: string
  languages: string
  borderCountries: string
  color?: 'dark' | 'light'
}

const CountryInfo = ({
  capital,
  countryName,
  currencies,
  languages,
  population,
  region,
  subregion,
  topLevelDomain,
  nativeName,
  borderCountries,
  color = 'light'
}: CountryInfoProps) => (
  <S.Wrapper color={color}>
    <S.CountryName>{countryName}</S.CountryName>
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
      {color == 'light' && <Button color="light">{borderCountries}</Button>}
      {color == 'dark' && <Button color="dark">{borderCountries}</Button>}
    </S.BorderCountries>
  </S.Wrapper>
)

export default CountryInfo
