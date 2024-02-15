import { supabase } from 'src/lib/supabase'

type UseApi = {
  email: string
  password: string
}

export async function signInWithEmail({ email, password }: UseApi) {
  return await supabase.auth.signInWithPassword({ email, password })
}
