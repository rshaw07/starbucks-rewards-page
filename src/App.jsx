import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { GreenStrip } from './components/GreenStrip'
import { Main } from './components/Main'
import { ThirdSection } from './components/ThirdSection'
import { Drinks } from './components/Drinks'
import { EndlessExtras } from './components/EndlessExtras'
import { Payments } from './components/Payments'

function App() {

  return (
    <>
    <Navbar/>
    <GreenStrip/>
    <Main/>
    <ThirdSection/>
    <Drinks/>
    <EndlessExtras/>
    <Payments/>
    </>
  )
}

export default App
