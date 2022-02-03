import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

type AuthProviderProps = {
  children: ReactNode
}

type User = {
  token: string;
  refreshToken: string;
  name: string;
  email: string;
  roles: [string]
  journeys: [{
    slug: string;
    title: string;
    imageUrl: string;
  }]
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  user: User
  signIn: (credentials: SignInCredentials) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const { data } = await api.post('login', { email, password })
      setUser(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user, 
    }}>
      {children}
    </AuthContext.Provider>
  )
}