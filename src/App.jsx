import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Materials from './Components/Materials/Materials'

function App() {
 

  return (
   <div>
    <Header/>
    <main>
      <Materials/>
    </main>
    <Footer/>
   </div>
  )
}

export default App
