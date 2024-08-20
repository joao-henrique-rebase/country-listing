import React from 'react'

const CountryFilter = ({
  nameFilter,
  setNameFilter,
  capitalFilter,
  setCapitalFilter,
  languageFilter,
  setLanguageFilter,
  languages,
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
    <select
      name="languages"
      value={languageFilter}
      onChange={(e) => setLanguageFilter(e.target.value)}
    >
      <option value="">Filtrar por idioma</option>
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  </div>
)

export default CountryFilter
