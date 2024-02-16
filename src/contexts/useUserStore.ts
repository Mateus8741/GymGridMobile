import { UserModel } from '@models'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserStore = {
  user: UserModel | null
  setUser: (user: UserModel) => void
  resetUser: () => void
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      resetUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export function useUserStorage() {
  const { user, setUser, resetUser } = useUserStore()

  return { user, setUser, resetUser }
}
