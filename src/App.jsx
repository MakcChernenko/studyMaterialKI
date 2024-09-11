import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Materials from './Components/Materials/Materials'

function App() {
  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = e.target
    const formValue = form.filtr.value
    console.log(formValue);
    alert(`Ти шукаєш ${formValue} , але цей фільтр ще не працює`)
    form.reset();
}

  return (
   <div>
    <Header handleSubmit={handleSubmit} />
    <main>
      <Materials/>
    </main>
    <Footer/>
   </div>
  )
}

export default App
