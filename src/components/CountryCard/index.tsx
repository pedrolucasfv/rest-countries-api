import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export type CountryCardProps = {
  countryName: string
  population: string
  region: string
  capital: string
  countryImage: string
  color?: 'light' | 'dark'
  slug: string
}

const CountryCard = ({
  countryName,
  population,
  region,
  capital,
  countryImage,
  color = 'light',
  slug
}: CountryCardProps) => (
  <Link href={`/country/${slug}`} passHref>
    <S.Wrapper color={color}>
      <S.CountryImage>
        <Image
          src={countryImage}
          alt="ahsdui"
          layout="fill"
          objectFit="cover"
        />
      </S.CountryImage>
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
  </Link>
)

export default CountryCard
