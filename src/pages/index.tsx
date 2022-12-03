//import CountryPage, { CountryPageProps } from 'templates/CountryPage'
import HomePage, { HomePageProps } from '../templates/HomePage'
import countryInfoMocks from '../components/CountryInfo/mock'
import selectRegionMocks from '../components/Select/mock'
import CountryPage from 'templates/CountryPage'
import { CountryInfoProps } from 'components/CountryInfo'
import { useEffect, useState } from 'react'

export default function Home(props: HomePageProps) {
  const [countrySelected, setCountrySelected] =
    useState<CountryInfoProps>(countryInfoMocks)
  const [isCountrySelected, setIsCountrySelected] = useState(false)
  const [countryName, setCountryName] = useState('brazil')
  const [flag, setFlag] = useState('')
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCountrySelected(data)
      })
  }, [countryName])

  const countrySelect = (country: string) => {
    setCountryName(country)
    setIsCountrySelected(true)
    setFlag(countrySelected[0].flags.svg)
    console.log(country)
    console.log(countryName)
    console.log(countrySelected)
    countryInfoMocks.countryName = countrySelected[0].name.common
    countryInfoMocks.nativeName = countrySelected[0].name.nativeName.official
    countryInfoMocks.population = countrySelected[0].population
    countryInfoMocks.region = countrySelected[0].region
    countryInfoMocks.subRegion = countrySelected[0].subRegion
    countryInfoMocks.capital = countrySelected[0].capital
    countryInfoMocks.topLevelDomain = countrySelected[0].tld[0]

    //countryInfoMocks.currencies = countrySelected[0].currencies
    //countryInfoMocks.borderCountries = countrySelected[0].borders
  }
  const backToHome = () => {
    setIsCountrySelected(false)
  }

  return (
    <>
      {isCountrySelected && (
        <CountryPage
          flag={flag}
          country={countryInfoMocks}
          color="dark"
          backToHome={backToHome}
        />
      )}
      {!isCountrySelected && (
        <HomePage {...props} checkCountry={countrySelect} color="dark" />
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
