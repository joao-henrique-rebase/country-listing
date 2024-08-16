import React from 'react'

const CountryFilter = ({
  nameFilter,
  setNameFilter,
  capitalFilter,
  setCapitalFilter,
}) => (
  <div>
    <input
      type="text"
      placeholder="Filtrar por nome do país"
      name="name"
      value={nameFilter}
      onChange={(e) => setNameFilter(e.target.value)}
    />
    <input
      type="text"
      placeholder="Filtrar por capital"
      name="capital"
      value={capitalFilter}
      onChange={(e) => setCapitalFilter(e.target.value)}
    />
  </div>
)

export default CountryFilter
