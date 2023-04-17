import { ArrowLeft } from '@styled-icons/heroicons-solid/ArrowLeft'
import { useState } from 'react'

import Button from 'components/Button'
import CountryInfo from 'components/CountryInfo'
import Menu from 'components/Menu'
import { CountryProps } from 'pages'
import * as S from './styles'

export type CountryPageProps = {
  country: CountryProps
  color?: 'dark' | 'light'
  flag: string
}

const CountryPage = ({ country, color = 'light', flag }: CountryPageProps) => {
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
        <div onClick={() => window.history.back()}>
          <Button color={colorTheme} icon={<ArrowLeft />}>
            BACK
          </Button>
        </div>
      </S.Button>
      <S.ImageContent>
        <S.Image src={flag} />
      </S.ImageContent>
      <S.Info>
        <CountryInfo {...country} color={colorTheme} />
      </S.Info>
    </S.Wrapper>
  )
}

export default CountryPage
