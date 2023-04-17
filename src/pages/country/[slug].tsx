import { GetStaticProps } from 'next'
import countriesApi from 'services/countriesApi'
import CountryPage, { CountryPageProps } from 'templates/CountryPage'

export default function Index(props: CountryPageProps) {
  return <CountryPage {...props} color="light" />
}
type cca3Props = {
  cca3: string
}
export async function getStaticPaths() {
  const cca3 = await countriesApi.paths()
  const slugs = cca3?.data.map((item: cca3Props) => item.cca3)

  const paths = await slugs?.map((slug: string) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const country = await countriesApi.country(slug)
  const nativeName = Object.keys(country?.data.name.nativeName)[0]
  const currency = Object.keys(country?.data.currencies)[0]
  const languages = Object.keys(country?.data.languages)
  return {
    props: {
      country: country && {
        name: country.data.name.common,
        nativeName: country.data.name.nativeName[nativeName].common,
        population: `${country.data.population}`,
        region: country.data.region,
        subregion: country.data.region,
        capital: country.data.capital[0],
        topLevelDomain: country.data.tld,
        currencies: country?.data.currencies[currency].name,
        languages: languages.map(
          (language) => country.data.languages[language]
        ),
        borderCountries: country?.data.borders[0] ? country.data.borders : null
      },
      flag: country?.data.flags.png
    }
  }
}
