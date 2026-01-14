import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-red-300 font-extrabold italic mb-4'>SARADIA</h1>
     <Card username="Saradia" text= "DREAMS" />
     <Card username="Surya" text= "DREAMS"/>
    </>
  )
}

export default App
