import Button from '@mui/material/Button'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import  app  from '../firebase'
const OAuth = () => {
  const auth = getAuth(app)
  //because we should wait for answer from google ,so is async:
  const handleGoogleClick = async() => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    try {
      const x =await signInWithPopup(auth, provider)
      console.log(x)
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Button type='button' onClick={handleGoogleClick}>
      Continue with Google
    </Button>
  )
}

export default OAuth
