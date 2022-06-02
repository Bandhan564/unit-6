import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Scroll } from './components/Infinite_scrolling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Scroll />
    </div>
  )
}

export default App
