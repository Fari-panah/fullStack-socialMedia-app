import { Container, Typography, Paper, Box,
  TextField, Button
 } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Notification from '../components/Notification'
import { useAuthActions } from '../stores/auth.store'
import OAuth from '../components/OAuth'
import useField from '../hooks/useField'

const LogIn = () => {
  const username = useField('text')
  const password = useField('password')
 
  const [errorMessage, setErrorMessage] = useState(null)

  const navigate = useNavigate()
  const { login } = useAuthActions()
  const handleLoginForm= async (e) => {
    e.preventDefault()
    try {
      await login({ 
        username: username.value,
        password: password.value,
      })
      
      navigate('/')
      
    } catch (error) {
        setErrorMessage('wrong credentials', error )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        
    }

  }
  return (
    <>
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
            {...username}
        />
          <TextField
          label="Password"
          fullWidth
          margin="normal"
          {...password}
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
        <OAuth />
        <Typography
            align="center"
            sx={{ mt: 3 }}
        >
            Dont have an account?{' '}
            <Link
                to="/signup"
                style={{
                    color: '#3d5afe',
                    textDecoration: 'none',
                }}
            >
            Sign Up
            </Link>
        </Typography>
        </Box>
        <Notification
            message={errorMessage}
            severity="error"
            />

      </Paper>
    </Container>
   </>
  )
}

export default LogIn
