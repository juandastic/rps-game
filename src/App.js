import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.scss'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  )
}

export default App
