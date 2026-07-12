import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj= {
    username: "abhay_99"
  }

  let arr = [1,2,3,4]

  return (

    <div className='bg-black h-screen' >
      <div className='flex flex-col items-center justify-between' >
        <h1 className='font-bold text-2xl p-4 bg-blue-400 rounded-2xl font-sans' >Tailwind CSS</h1>
      </div>
      
      <div className='flex items-center justify-center gap-4'>

      <Card name="Thor"/>
      <Card name="Loki"/>
      <Card name="Captain America" identity="Winter Soldier" />
      </div>

    </div>
  )
}

export default App
