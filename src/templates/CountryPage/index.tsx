import { ArrowLeft } from '@styled-icons/heroicons-solid/ArrowLeft'
import { useState } from 'react'

import Button from 'components/Button'
import CountryInfo, { CountryInfoProps } from 'components/CountryInfo'
import Menu from 'components/Menu'
import * as S from './styles'

export type CountryPageProps = {
  country: CountryInfoProps
  color: 'dark' | 'light'
}

const CountryPage = ({ country, color = 'light' }: CountryPageProps) => {
  const [colorTheme, setColorTheme] = useState(color)

  const changeColor = () => {
    if (colorTheme == 'dark') setColorTheme('light')
    else setColorTheme('dark')
  }

  return (
    <S.Wrapper color={colorTheme}>
      <S.Menu>
        <Menu changeColor={changeColor} color={colorTheme} />
      </S.Menu>
      <S.Button>
        <Button color={colorTheme} icon={<ArrowLeft />}>
          BACK
        </Button>
      </S.Button>
      <S.Image src="/img/flag-germany.png" />
      <S.Info>
        <CountryInfo {...country} color={colorTheme} />
      </S.Info>
    </S.Wrapper>
  )
}

export default CountryPage
