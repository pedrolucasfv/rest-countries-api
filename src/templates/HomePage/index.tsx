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
  const [countriesFiltered, setCountriesFiltered] =
    useState<CountryCardProps[]>()
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

  const searchName = (value: string) => {
    const filter = countries.filter((country) =>
      country.countryName.toLowerCase().includes(value.toLowerCase())
    )
    setCountriesFiltered(filter)
  }
  return (
    <S.Wrapper color={colorTheme}>
      <S.Menu>
        <Menu changeColor={changeColor} color={colorTheme} />
      </S.Menu>
      <S.Content>
        <S.Filters>
          <S.SearchBar>
            <SearchBar
              placeholder="Search for countries"
              color={colorTheme}
              onInputChange={searchName}
            />
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
            countries={countriesFiltered ? countriesFiltered : countries}
            region={regionSelect}
            filter={isRegionSelected}
          />
        </S.CardGroup>
      </S.Content>
    </S.Wrapper>
  )
}
export default HomePage
