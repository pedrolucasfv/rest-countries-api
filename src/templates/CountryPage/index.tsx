import { ArrowLeft } from '@styled-icons/heroicons-solid/ArrowLeft'
import { useState } from 'react'

import Button from 'components/Button'
import CountryInfo, { CountryInfoProps } from 'components/CountryInfo'
import Menu from 'components/Menu'
import * as S from './styles'

export type CountryPageProps = {
  country: CountryInfoProps
  color: 'dark' | 'light'
  flag: string
  backToHome: () => void
}

const CountryPage = ({
  country,
  color = 'light',
  backToHome,
  flag
}: CountryPageProps) => {
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
      <S.Button onClick={() => backToHome()}>
        <Button color={colorTheme} icon={<ArrowLeft />}>
          BACK
        </Button>
      </S.Button>
      <S.Image src={flag} />
      <S.Info>
        <CountryInfo {...country} color={colorTheme} />
      </S.Info>
    </S.Wrapper>
  )
}

export default CountryPage
