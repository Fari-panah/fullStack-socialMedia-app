import { Container, Typography, Paper, Box,
  TextField, Button
 } from "@mui/material"
import { useState } from "react"
import loginService from '../services/login'
import Notification from '../components/Notification'

const LogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)

  const handleLoginForm= async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({ username, setPassword })
      setUser(user)
      setUsername('')
      setPassword('')
      
    } catch (error) {
        setErrorMessage('wrong credentials', error )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        
    }

  }
  return (
    <>
    <Notification message={errorMessage} />
    {user && (
    <Typography>
      Logged in {user.username}
    </Typography>
  )}
    <Container>
      <Paper
       elevation={6}
    sx={{
    mt: 6,
    p: 4,
    borderRadius: 4,
    bgcolor: 'background.paper',
    }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: 700 }}
            >
            Log In
        </Typography>
        <Box
        component="form"
        onSubmit={handleLoginForm}
        >
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) =>
            setUsername(e.target.value.trim())
            }
        />
          <TextField
          label="Password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())
          }
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
        mt: 3,
        py: 1.4,
        background:
            'linear-gradient(90deg,#673ab7,#d94692)',
        fontWeight: 700,
        '&:hover': {
            background:
            'linear-gradient(90deg,#512da8,#c2185b)',
        },
        }}>
        Log In
        </Button>
        </Box>

      </Paper>
    </Container>
   </>
  )
}

export default LogIn
