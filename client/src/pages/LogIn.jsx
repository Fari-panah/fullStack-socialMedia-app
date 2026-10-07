import { useState } from "react"

const LogIn = () => {
[username, setUsername] = useState(" ")
[password, setPassword] = useState(" ")
  return (
   <form onSubmit={handleLogin}>
    <div>
        <label>username:</label>
        <input
        type="text"
        value={username}
        onChange={({target}) => setUsername(target.value)}
        />
    </div>

   </form>
  )
}

export default LogIn
