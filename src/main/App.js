import React from 'react'
import { ApolloProvider, CountryList, Header, Footer } from '../components'
import '../assets/styles/app.css'

function App() {
  return (
    <ApolloProvider>
      <div className="main">
        <Header />
        <CountryList />
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default App
