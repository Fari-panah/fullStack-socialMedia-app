import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Home from './pages/Home'


const App = () => {
  return (
    <>
      <Header />
     
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
        
      
    </>
   
  )
}

export default App
