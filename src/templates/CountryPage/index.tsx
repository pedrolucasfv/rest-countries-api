import { ArrowLeft } from '@styled-icons/heroicons-solid/ArrowLeft'
import { useState } from 'react'

import Button from 'components/Button'
import CountryInfo from 'components/CountryInfo'
import Menu from 'components/Menu'
import * as S from './styles'
import { CountryProps } from 'pages'

export type CountryPageProps = {
  country: CountryProps
  color: 'dark' | 'light'
  flag: string
  backToHome: () => void
  countrySelect: (country: string, alpha: boolean) => void
  switchColor: () => void
}

const CountryPage = ({
  country,
  color = 'light',
  flag,
  backToHome,
  countrySelect,
  switchColor
}: CountryPageProps) => {
  const [colorTheme, setColorTheme] = useState(color)

  const changeColor = () => {
    if (colorTheme == 'dark') setColorTheme('light')
    else setColorTheme('dark')
    switchColor()
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
      <S.ImageContent>
        <S.Image src={flag} />
      </S.ImageContent>
      <S.Info>
        <CountryInfo
          {...country}
          color={colorTheme}
          countrySelect={countrySelect}
        />
      </S.Info>
    </S.Wrapper>
  )
}

export default CountryPage
