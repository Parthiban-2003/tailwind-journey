import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TailWindColors from './tailwind-colors/tailwindColors'
import TailWindMarginPadding from './tailwind-margin-padding/TailWindMarginPadding'
import TailWindTypography from './tailwind-typography/TailWindTypography'
import TailWindBorder from './tailwind-border/TailwindBorder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TailWindColors/> <br />
      <TailWindMarginPadding/> <br />
      <TailWindTypography/> <br />
      <TailWindBorder/> <br />
    </>
  )
}

export default App
