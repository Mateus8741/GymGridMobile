import { supabase } from 'src/lib/supabase'

export type LoginProps = {
  email: string
  password: string
}

async function Login({ email, password }: LoginProps) {
  return await supabase.auth.signInWithPassword({ email, password })
}

function SignOut() {
  return supabase.auth.signOut()
}

export function useAuthFuctions() {
  return { Login, SignOut }
}
