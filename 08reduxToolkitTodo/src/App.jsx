import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h5>Learn About Redux</h5>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
