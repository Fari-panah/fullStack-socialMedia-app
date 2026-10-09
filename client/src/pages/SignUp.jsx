import { Alert, Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = ('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!username || !email || !password){
            return setErrorMessage('Please fill out all fields!')
        }


    }
    return(
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
                        Sign Up
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        sx={{ mb: 4 }}
                        >
                        Create your account and join SocialMedia
                    </Typography>
                    <Box
                      component="form"
                      onSubmit={handleFormSubmit}
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
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) =>
                        setEmail(e.target.value.trim())
                        }
                    />

                    <TextField
                        label="Password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) =>
                        setPassword(e.target.value.trim())
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
                        }}
                    >
                        Sign Up
                    </Button>
                    <Typography
                        align="center"
                        sx={{ mt: 3 }}
                    >
                        Have an account?{' '}
                        <Link
                            to="/login"
                            style={{
                                color: '#3d5afe',
                                textDecoration: 'none',
                            }}
                        >
                        Logn In
                        </Link>
                    </Typography>
                    </Box>
                    <Alert>{errorMessage}</Alert>
                </Paper>
            </Container> 
                
    )

}

export default SignUp