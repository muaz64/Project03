import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Destinations from './components/Destinations'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <AboutUs />
    <Destinations />
    <Contact />
    <Footer />
  
    </>
  )
}

export default App
