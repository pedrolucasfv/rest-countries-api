import Button from 'components/Button'
import * as S from './styles'

export type CountryInfoProps = {
  countryName: string
  nativeName: string
  population: string
  region: string
  subRegion: string
  capital: string
  topLevelDomain: string
  currencies: string
  languages: string
  borderCountries: string
}

const CountryInfo = ({
  capital,
  countryName,
  currencies,
  languages,
  population,
  region,
  subRegion,
  topLevelDomain,
  nativeName,
  borderCountries
}: CountryInfoProps) => (
  <S.Wrapper>
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
        {subRegion}
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
      <Button>{borderCountries}</Button>
    </S.BorderCountries>
  </S.Wrapper>
)

export default CountryInfo
