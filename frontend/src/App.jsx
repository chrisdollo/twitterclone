import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Top from './components/Top/Top.jsx'
import Feed from './components/Feed/Feed.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Top></Top>
        <Feed></Feed>
      </div>
    </>
  )
}

export default App
