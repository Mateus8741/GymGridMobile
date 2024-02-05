import { useNavigation } from '@react-navigation/native'

export function useResetNavigation() {
  const { reset } = useNavigation()

  function resetNavigation() {
    reset({
      index: 0,
      routes: [
        {
          name: 'LoginScreen',
        },
      ],
    })
  }

  return { reset: resetNavigation }
}
