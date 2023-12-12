import React from 'react'
import ReactDOM from 'react-dom'

import '@/styles/index.scss'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import LandingPage from './LandingPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BarberProfile from './BarberProfile'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/ratings' element={<BarberProfile />} />
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<App />, wrapper)
