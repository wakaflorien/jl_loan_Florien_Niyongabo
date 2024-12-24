import { useState } from 'react'
import { UserInterface } from './App.types'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [showregister, setshowregister] = useState<boolean>(false)

  const handleShowRegister = () => {
    setshowregister(!showregister)
  }
  const isLoggedIn = localStorage.getItem('loggedUser')

  if(isLoggedIn) {
    console.log(isLoggedIn, "get item")
  }

  return (
    <main className='h-screen'>
      {!isLoggedIn && !showregister && <Login handleShowRegister={handleShowRegister} />}
      {showregister && <Register handleShowRegister={handleShowRegister} />}
      {isLoggedIn && <Dashboard />}
    </main>
  )
}

export default App
