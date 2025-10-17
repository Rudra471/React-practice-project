import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar'>
      <Navigation />
      <Hero />
    </div>
      
    </>
  )
}

export default App
