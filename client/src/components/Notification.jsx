import { Alert } from '@mui/material'
const Notification = ({message, severity = 'error' }) => {
    if (message === null){
        return null
    }
  return (
    <Alert  severity={severity}>
        {message}
    
    </Alert>
  )
}

export default Notification
