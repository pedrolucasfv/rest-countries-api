import CountryPage, { CountryPageProps } from 'templates/CountryPage'
import countryInfoMocks from '../components/CountryInfo/mock'

export default function Home(props: CountryPageProps) {
  return <CountryPage {...props} color="dark" />
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
      country: countryInfoMocks
    }
  }
}
