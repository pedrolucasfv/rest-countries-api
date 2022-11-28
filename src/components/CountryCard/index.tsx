import * as S from './styles'

export type CountryCardProps = {
  countryName: string
  population: string
  region: string
  capital: string
  countryImage: string
  color?: 'light' | 'dark'
}

const CountryCard = ({
  countryName,
  population,
  region,
  capital,
  countryImage,
  color = 'light'
}: CountryCardProps) => (
  <S.Wrapper color={color}>
    <S.CountryImage src={countryImage} />
    <S.Info>
      <S.CountryName>{countryName}</S.CountryName>
      <S.Population>
        <span>Population:</span> {population}
      </S.Population>
      <S.Population>
        <span>Region:</span> {region}
      </S.Population>
      <S.Capital>
        <span>Capital:</span> {capital}
      </S.Capital>
    </S.Info>
  </S.Wrapper>
)

export default CountryCard
