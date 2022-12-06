import { createContext, useContext, useMemo, useState } from 'react'
import { AuthContextTypes } from './types'

const AuthContext = createContext({})

const AuthProvider = (props: any) => {
  const [email, setEmail] = useState('')
  const value = useMemo(() => ({ email, setEmail }), [email])

  return <AuthContext.Provider value={value} {...props} />
}

const useAuth = () => {
  const context = useContext(AuthContext)
  
  if (!context) {
    throw new Error('useAuth must be used within a AuthContext')
  }

  return { ...context } as AuthContextTypes
}

export { AuthProvider, useAuth }
