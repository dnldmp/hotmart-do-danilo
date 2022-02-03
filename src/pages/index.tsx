import { FormEvent, useContext, useState } from "react"
import Router from "next/router"
import { api } from "../services/api"
import { AuthContext } from "../contexts/AuthContext"

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(AuthContext)

  async function signInRedirectToDashboard() {
    return signIn({ email, password }).then(() => {
      Router.push('/dashboard')
    }).catch(error => {
      alert(error)
    })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    signInRedirectToDashboard()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <button type="submit">Login</button>
    </form>
  )
}
