import { ArrowLeft } from '@styled-icons/heroicons-solid/ArrowLeft'

import Button from 'components/Button'
import CountryInfo, { CountryInfoProps } from 'components/CountryInfo'
import Menu from 'components/Menu'
import * as S from './styles'

export type CountryPageProps = {
  country: CountryInfoProps
  color: 'dark' | 'light'
}

const CountryPage = ({ country, color = 'light' }: CountryPageProps) => (
  <S.Wrapper color={color}>
    <S.Menu>
      <Menu color={color} />
    </S.Menu>
    <S.Button>
      <Button color={color} icon={<ArrowLeft />}>
        BACK
      </Button>
    </S.Button>
    <S.Image src="/img/flag-germany.png" />
    <S.Info>
      <CountryInfo {...country} color={color} />
    </S.Info>
  </S.Wrapper>
)

export default CountryPage
