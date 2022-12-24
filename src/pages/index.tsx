//import CountryPage, { CountryPageProps } from 'templates/CountryPage'
import HomePage, { HomePageProps } from '../templates/HomePage'
import countryInfoMocks from '../components/CountryInfo/mock'
import selectRegionMocks from '../components/Select/mock'
import CountryPage from 'templates/CountryPage'
import { CountryInfoProps } from 'components/CountryInfo'
import { useState } from 'react'

type ColorProps = 'light' | 'dark'

export type CountryProps = Omit<CountryInfoProps, 'color' | 'countrySelect'>

export default function Home(props: HomePageProps) {
  let countryPicked
  const darkColor: ColorProps = 'dark'
  const lightColor: ColorProps = 'light'
  const [colorTheme, setColorTheme] = useState<ColorProps>(lightColor)
  const [isCountrySelected, setIsCountrySelected] = useState(false)
  const [flag, setFlag] = useState('')

  const countrySelect = (country: string, alpha: boolean) => {
    if (alpha) {
      fetch(`https://restcountries.com/v3.1/alpha/${country}`)
        .then((resp) => resp.json())
        .then((data) => {
          countryPicked = data[0]
          console.log(countryPicked)
          countryInfoMocks.name = countryPicked.name.common
          countryInfoMocks.nativeName = countryPicked.name.official
          countryInfoMocks.capital = countryPicked.capital
          countryInfoMocks.region = countryPicked.region
          countryInfoMocks.population = countryPicked.population
          countryInfoMocks.subregion = countryPicked.subregion
          countryInfoMocks.topLevelDomain = countryPicked.tld
          //countryInfoMocks.currencies = countryPicked.currencies
          //countryInfoMocks.languages = countryPicked.languages
          countryInfoMocks.borderCountries = countryPicked.borders
          console.log(countryInfoMocks.borderCountries)
          setFlag(countryPicked.flags.svg)
          setIsCountrySelected(true)
          console.log(countryPicked)
        })
    } else {
      fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((resp) => resp.json())
        .then((data) => {
          countryPicked = data[0]
          console.log(countryPicked)
          countryInfoMocks.name = countryPicked.name.common
          countryInfoMocks.nativeName = countryPicked.name.official
          countryInfoMocks.capital = countryPicked.capital
          countryInfoMocks.region = countryPicked.region
          countryInfoMocks.population = countryPicked.population
          countryInfoMocks.subregion = countryPicked.subregion
          countryInfoMocks.topLevelDomain = countryPicked.tld
          //countryInfoMocks.currencies = countryPicked.currencies
          //countryInfoMocks.languages = countryPicked.languages
          countryInfoMocks.borderCountries = countryPicked.borders
          console.log(countryInfoMocks.borderCountries)
          setFlag(countryPicked.flags.svg)
          setIsCountrySelected(true)
        })
    }
  }

  const backToHome = () => {
    setIsCountrySelected(false)
  }

  const changeColor = () => {
    if (colorTheme == darkColor) setColorTheme(lightColor)
    else setColorTheme(darkColor)
  }

  return (
    <>
      {isCountrySelected && (
        <CountryPage
          flag={flag}
          country={countryInfoMocks}
          color={colorTheme}
          backToHome={backToHome}
          countrySelect={countrySelect}
          switchColor={changeColor}
        />
      )}
      {!isCountrySelected && (
        <HomePage {...props} checkCountry={countrySelect} color={colorTheme} />
      )}
    </>
  )
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export function getServerSideProps() {
  // faz lógica
  // pode ser buscar dados numa API
  // fazer calculo|leitura de context
  // retorno dos dados
  return {
    props: {
      selectRegion: selectRegionMocks
    }
  }
}

//<HomePage {...props} color="dark" />
//<CountryPage {...props} color="dark" />
