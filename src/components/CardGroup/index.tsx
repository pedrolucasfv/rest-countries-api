import CountryCard, { CountryCardProps } from '../CountryCard'
import * as S from './styles'

export type CardGroupProps = {
  countries: CountryCardProps[]
  region?: string
  filter?: boolean
}

const CardGroup = ({ region, filter = false, countries }: CardGroupProps) => {
  return (
    <S.Wrapper>
      {countries.map((resp, index) => {
        return (
          <>
            {!filter && (
              <S.Cards key={index}>
                <CountryCard {...resp} />
              </S.Cards>
            )}
            {filter && (
              <>
                {region == resp.region && (
                  <S.Cards key={index}>
                    <CountryCard {...resp} />
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
