import Api from './api'

const countriesApi = {
  countryCards: () =>
    Api.get('/all?fields=name,capital,population,region,flags,cca3').catch(
      () => null
    ),
  paths: () => Api.get('/all?fields=cca3').catch(() => null),
  country: (code: string | string[] | undefined) =>
    Api.get(
      `/alpha/${code}?fields=name,capital,population,region,flags,tld,currencies,languages,borders`
    ).catch(() => null)
}

export default countriesApi
