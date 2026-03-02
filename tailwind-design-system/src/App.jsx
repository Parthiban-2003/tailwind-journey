import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TailWindColors from './tailwind-colors/tailwindColors'
import TailWindMarginPadding from './tailwind-margin-padding/TailWindMarginPadding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TailWindColors/>
      <TailWindMarginPadding/>
    </>
  )
}

export default App
