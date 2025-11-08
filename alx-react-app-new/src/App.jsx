import { useState } from 'react'
import './App.css'
import WelcomeMessage from '/components/WelcomeMessage'
import Header from '/components/Header'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1><Header /></h1>
      <p><WelcomeMessage /></p>
      <p><UserProfile /></p>
      <p><Counter /></p>
      <p><Footer /></p>
    </>
  )
}

export default App
