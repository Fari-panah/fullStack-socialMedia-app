import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { usePostActions } from '../src/stores/post.store'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import getTheme from './theme/theme';
import { useThemeMode } from './stores/theme.store'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'



const App = () => {
  const mode = useThemeMode()
  const theme = getTheme(mode)

  const { initialize } = usePostActions()
  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

    {/* {!user && <SignUp/>}
     {user && <Home />}. */}
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
        
        
      </Routes>
        
     </ThemeProvider> 
    </>
   
  )
}

export default App
