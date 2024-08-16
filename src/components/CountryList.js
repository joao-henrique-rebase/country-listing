import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../queries/countriesQuery'
import { CountryFilter, CountryRow } from './'

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES)
  const [nameFilter, setNameFilter] = useState('')
  const [capitalFilter, setCapitalFilter] = useState('')

  if (loading) return <p>Carregando lista...</p>
  if (error) return <p>Poxa, Erro :(</p>

  const filteredCountries = data.countries.filter((country) => {
    return (
      country.name?.toLowerCase().includes(nameFilter.toLowerCase()) &&
      country.capital?.toLowerCase().includes(capitalFilter.toLowerCase())
    )
  })

  return (
    <main>
      <CountryFilter
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        capitalFilter={capitalFilter}
        setCapitalFilter={setCapitalFilter}
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
