import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
     
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
        
      
    </>
   
  )
}

export default App
