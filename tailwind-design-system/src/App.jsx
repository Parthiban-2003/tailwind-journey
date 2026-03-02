import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TailWindColors from './tailwind-colors/tailwindColors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TailWindColors/>
    </>
  )
}

export default App
