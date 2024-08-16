import React from 'react'
import { ApolloProvider, CountryList } from '../components'
import '../assets/styles/app.css'

function App() {
  return (
    <ApolloProvider>
      <div className="App">
        <header className="App-header">
          <h1>Lista de Países</h1>
          <p>
            Explore informações sobre países, suas capitais, idiomas e mais!
          </p>
        </header>
        <main>
          <CountryList />
        </main>
        <footer className="App-footer">
          <p>Desenvolvido por Rebase - 2024</p>
        </footer>
      </div>
    </ApolloProvider>
  )
}

export default App
