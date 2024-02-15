import { useUserStorage } from '@contexts'
import { UserModel } from '@models'
import { useMutation } from '@tanstack/react-query'

import { useAuthFuctions } from '../useApi'

type SignInMutationProps = {
  email: string
  password: string
}

export function useSignIn({ email, password }: SignInMutationProps) {
  const { setUser } = useUserStorage()
  const { Login } = useAuthFuctions()

  const { mutate } = useMutation({
    mutationFn: () => Login({ email, password }),
    onSuccess: ({ data }) => {
      setUser(data as UserModel)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return { signIn: mutate }
}

export function useSignOut() {
  const { resetUser } = useUserStorage()
  const { SignOut } = useAuthFuctions()

  async function signOut() {
    await SignOut()
    resetUser()
  }

  return { signOut }
}
