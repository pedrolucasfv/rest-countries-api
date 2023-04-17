//import { CountryCardProps } from 'components/CountryCard'
import { CountryCardProps } from 'components/CountryCard'
import Menu from 'components/Menu'
import SearchBar from 'components/SearchBar'
import Select, { SelectProps } from 'components/Select'
import { useState } from 'react'
import CardGroup from '../../components/CardGroup'
import * as S from './styles'

export type HomePageProps = {
  selectRegion: SelectProps
  countries: CountryCardProps[]
  color: 'dark' | 'light'
}

const HomePage = ({ color, selectRegion, countries }: HomePageProps) => {
  const [colorTheme, setColorTheme] = useState(color)

  const [regionSelect, setRegionSelect] = useState('Asia')
  const [isRegionSelected, setIsRegionSelected] = useState(false)

  const changeColor = () => {
    if (colorTheme == 'dark') setColorTheme('light')
    else setColorTheme('dark')
  }

  const regionSelected = (region: string) => {
    setRegionSelect(region)
    setIsRegionSelected(true)
  }

  return (
    <S.Wrapper color={colorTheme}>
      <S.Menu>
        <Menu changeColor={changeColor} color={colorTheme} />
      </S.Menu>
      <S.Content>
        <S.Filters>
          <S.SearchBar>
            <SearchBar initialValue="Search for countries" color={colorTheme} />
          </S.SearchBar>
          <S.SelectRegion>
            <Select
              {...selectRegion}
              color={colorTheme}
              regionSelected={regionSelected}
            />
          </S.SelectRegion>
        </S.Filters>
        <S.CardGroup>
          <CardGroup
            countries={countries}
            region={regionSelect}
            filter={isRegionSelected}
          />
        </S.CardGroup>
      </S.Content>
    </S.Wrapper>
  )
}
export default HomePage
