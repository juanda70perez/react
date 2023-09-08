import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoutesWeb from './RoutesWeb'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <RoutesWeb></RoutesWeb>
      </div>


  )
}

export default App
