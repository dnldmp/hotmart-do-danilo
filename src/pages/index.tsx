import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    await signIn({ email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <button type="submit">Login</button>
    </form>
  )
}
