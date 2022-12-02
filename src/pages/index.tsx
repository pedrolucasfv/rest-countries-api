//import CountryPage, { CountryPageProps } from 'templates/CountryPage'
import HomePage, { HomePageProps } from 'templates/HomePage'
//import countryInfoMocks from '../components/CountryInfo/mock'
import selectRegionMocks from '../components/Select/mock'

export default function Home(props: HomePageProps) {
  return <HomePage {...props} color="dark" />
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

//<CountryPage {...props} color="dark" />
