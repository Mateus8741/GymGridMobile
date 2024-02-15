import { useUserStorage } from '@contexts'
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

async function RefreshToken() {
  // return supabase.auth.onAuthStateChange((event, session) => {
  //   if (session?.user.aud !== 'authenticated') {
  //     supabase.auth.signOut()
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     useUserStorage().resetUser()
  //   }
  // })

  const { data, error } = await supabase.auth.getSession()

  if (error || !data) {
    supabase.auth.signOut()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useUserStorage().resetUser()
  }
}

export function useAuthFuctions() {
  return { Login, SignOut, RefreshToken }
}
