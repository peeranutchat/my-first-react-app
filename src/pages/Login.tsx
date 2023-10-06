import { FormEvent, useState } from 'react'
import classes from './Login.module.css'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login
