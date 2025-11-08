import './App.css'
import Header from './components/Header'
import WelcomeMessage from './components/WelcomeMessage'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <p><Header /></p>
      <p><WelcomeMessage /></p>
      <p><UserProfile /></p>  
      <p><Counter /></p>
      <p><MainContent /></p>
      <p><Footer /></p>
      
    </>
  )
}

export default App
