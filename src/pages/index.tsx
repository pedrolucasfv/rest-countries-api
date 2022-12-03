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

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/peru')
      .then((resp) => resp.json())
      .then((data) => {
        setCountrySelected(data)
      })
  }, [])

  const countrySelect = (country: string) => {
    setIsCountrySelected(true)
    console.log(country)
  }
  const backToHome = () => {
    setIsCountrySelected(false)
  }

  return (
    <>
      {isCountrySelected && (
        <CountryPage
          country={countrySelected}
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
