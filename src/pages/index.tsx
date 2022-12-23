//import CountryPage, { CountryPageProps } from 'templates/CountryPage'
import HomePage, { HomePageProps } from '../templates/HomePage'
import countryInfoMocks from '../components/CountryInfo/mock'
import selectRegionMocks from '../components/Select/mock'
import CountryPage from 'templates/CountryPage'
import { CountryInfoProps } from 'components/CountryInfo'
import { useState } from 'react'

export default function Home(props: HomePageProps) {
  let countryPicked: CountryInfoProps = countryInfoMocks

  const [isCountrySelected, setIsCountrySelected] = useState(false)
  const [countryPick, setCountryPick] =
    useState<CountryInfoProps>(countryInfoMocks)
  const [flag, setFlag] = useState('')

  const countrySelect = (country: string) => {
    countryInfoMocks.countryName = country
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((resp) => resp.json())
      .then((data) => {
        countryPicked = data[0]
        setCountryPick(countryPicked)
        console.log(countryPick)
        countryInfoMocks.nativeName = countryPicked.name.official
        countryInfoMocks.capital = countryPicked.capital
        countryInfoMocks.region = countryPicked.region
        countryInfoMocks.population = countryPicked.population
        countryInfoMocks.subregion = countryPicked.subregion
        countryInfoMocks.topLevelDomain = countryPicked.tld
        //countryInfoMocks.currencies = countryPicked.currencies
        countryInfoMocks.borderCountries = countryPicked.borders
        console.log(countryInfoMocks.borderCountries)
        setFlag(countryPicked.flags.svg)
        setIsCountrySelected(true)
      })
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
