import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  const urlparams = new URLSearchParams(location.search)
  const tab = urlparams.get('tab') || 'profile'
  return (
    <div>
      
        <Sidebar />
      
        {tab === 'profile' && <Profile />}
    </div>
  )
}

export default Dashboard
