import React from 'react'

const CountryRow = ({ country }) => (
  <tr>
    <td>{country.emoji}</td>
    <td>{country.name}</td>
    <td>{country.capital}</td>
    <td>{country.languages.map((lang) => lang.name).join(', ')}</td>
  </tr>
)

export default CountryRow
