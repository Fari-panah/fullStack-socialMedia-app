
import { useCurrentUser } from '../stores/auth.store'

const Profile = () => {

    const currentUser = useCurrentUser()
  return (
    <div>
        <h1>profile</h1>
        <form >
            <img />
            <input 
                type="text"
                value ={currentUser.username}
                onChange={e => e.target.value}
                 />
            <input 
                type="email"
                value ={currentUser.email}
                onChange={e => e.target.value}
            />
            <input 
                type="password"
                placeholder='password'
                value ={currentUser.password}
                onChange={e => e.target.value}
            />
            <button type='submit'>update</button>

        </form>
        <span> Delete Account</span>  <span>Log Out</span>
      
    </div>
  )
}

export default Profile
