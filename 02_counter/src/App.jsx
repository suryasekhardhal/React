import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addValue = () => {
    setCount(++count)
    
  }
  const removeValue = () => {
    if (count === 0) return
    setCount(count-1)
  }
  return (
    <>
     <h1>Counter App</h1>
     <h2>Value :{count} </h2>
     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
