import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TailWindColors from './tailwind-colors/tailwindColors'
import TailWindMarginPadding from './tailwind-margin-padding/TailWindMarginPadding'
import TailWindTypography from './tailwind-typography/TailWindTypography'
import TailWindBorder from './tailwind-border/TailwindBorder'
import TailWindHeightWeight from './tailwind-height-width/TailWindHeightWidth'
import TailWindDisplayOverFlow from './tailwind-display-overflow/TailWindDisplayOverFlow'
import TailWindFlex from './tailwind-flex/TailWindFlex'
import TailWindGrid from './tailwind-grid/TailWindGrid'
import TailWindShadow from './tailwind-shadow/TailWindShadow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TailWindColors/> <br />
      <TailWindMarginPadding/> <br />
      <TailWindTypography/> <br />
      <TailWindBorder/> <br />
      <TailWindHeightWeight/> <br />
      <TailWindDisplayOverFlow/> <br />
      <TailWindFlex/> <br />
      <TailWindGrid/> <br />
      <TailWindShadow/> <br />
    </>
  )
}

export default App
