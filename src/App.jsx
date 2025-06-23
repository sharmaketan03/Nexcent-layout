import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import OurClients from './Components/OurClients'
import Passwithimg from './Components/Passwithimg'
import BookingsSection from './Components/BookingsSection'
import Designwithcss from './Components/Designwithcss'
import TeslaSection from './Components/TeslaSection'
import Demo from './Components/Demo'
import Footer from './Components/Footer'
import Position from './Components/Position'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Homepage/>
        <OurClients/>
        <Passwithimg/>
        <BookingsSection/>
        <Designwithcss/>
        <TeslaSection/>
        <Position/>
        <Demo/>
        <Footer/>
    </>
  )
}

export default App
