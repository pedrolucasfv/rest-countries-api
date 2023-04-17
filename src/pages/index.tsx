//import CountryPage, { CountryPageProps } from 'templates/CountryPage'
import { CountryInfoProps } from 'components/CountryInfo'
import { GetStaticProps } from 'next'
import countriesApi from 'services/countriesApi'
import selectRegionMocks from '../components/Select/mock'
import HomePage, { HomePageProps } from '../templates/HomePage'

export type CountryProps = Omit<CountryInfoProps, 'color' | 'countrySelect'>

export default function Home(props: HomePageProps) {
  return <HomePage {...props} color={'light'} />
}

type StateProps = {
  name: {
    common: string
  }
  population: string
  region: string
  capital: string
  cca3: string
  flags: {
    svg: string
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const countries = await countriesApi.countryCards()
  return {
    props: {
      countries: countries?.data.map((country: StateProps) => {
        const Country = {
          countryName: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital,
          countryImage: country.flags.svg,
          slug: country.cca3
        }
        return Country
      }),
      selectRegion: selectRegionMocks
    }
  }
}
