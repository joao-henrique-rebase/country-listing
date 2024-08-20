import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../queries/countriesQuery'
import { CountryFilter, CountryRow } from './'

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES)
  const [nameFilter, setNameFilter] = useState('')
  const [capitalFilter, setCapitalFilter] = useState('')
  const [languageFilter, setLanguageFilter] = useState('')

  if (loading) return <p>Carregando lista...</p>
  if (error) return <p>Poxa, Erro :(</p>

  const uniqueLanguages = Array.from(
    new Set(
      data.countries.flatMap((country) =>
        country.languages.map((lang) => lang.name)
      )
    )
  ).sort()

  const filteredCountries = data.countries.filter(
    ({ name, capital, languages }) => {
      const matchesName = name.toLowerCase().includes(nameFilter.toLowerCase())
      const matchesCapital = capital
        ?.toLowerCase()
        .includes(capitalFilter.toLowerCase())
      const matchesLanguage =
        !languageFilter ||
        languages.some((lang) => lang.name === languageFilter)

      return matchesName && matchesCapital && matchesLanguage
    }
  )

  return (
    <main>
      <CountryFilter
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        capitalFilter={capitalFilter}
        setCapitalFilter={setCapitalFilter}
        languageFilter={languageFilter}
        setLanguageFilter={setLanguageFilter}
        languages={uniqueLanguages}
      />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>País</th>
            <th>Capital</th>
            <th>Idiomas</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country) => (
            <CountryRow key={country.name} country={country} />
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default CountryList
