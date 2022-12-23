//import { CountryCardProps } from 'components/CountryCard'
import Menu from 'components/Menu'
import SearchBar from 'components/SearchBar'
import Select, { SelectProps } from 'components/Select'
import { useState } from 'react'
import CardGroup from '../../components/CardGroup'
import * as S from './styles'

export type HomePageProps = {
  selectRegion: SelectProps
  color: 'dark' | 'light'
  checkCountry: (country: string) => void
}

const HomePage = ({ color, selectRegion, checkCountry }: HomePageProps) => {
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
    console.log(regionSelect)
    console.log(isRegionSelected)
  }

  const countrySelected = (country: string) => {
    checkCountry(country)
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
            countrySelected={countrySelected}
            region={regionSelect}
            filter={isRegionSelected}
          />
        </S.CardGroup>
      </S.Content>
    </S.Wrapper>
  )
}
export default HomePage
