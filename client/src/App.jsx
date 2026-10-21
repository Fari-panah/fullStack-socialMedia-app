import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { usePostActions } from '../src/stores/post.store'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Home from './pages/Home'



const App = () => {
  const { initialize } = usePostActions()
  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <>
      <Header />

    {/* {!user && <SignUp/>}
     {user && <Home />}. */}
     
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
        
      
    </>
   
  )
}

export default App
