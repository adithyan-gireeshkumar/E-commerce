import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BackgroundPattern2 } from './components/background-pattern2'
import { Community2 } from './components/community2'
import { Feature2 } from './components/feature2'
import { Footer7 } from './components/footer7'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BackgroundPattern2 />
      <Feature2 />
      <Community2 />
      <Footer7/>

    </>
  )
}

export default App
