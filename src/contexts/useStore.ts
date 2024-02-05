import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type OnboardStore = {
  onboard: boolean
  setOnboard: (onboard: boolean) => void
  resetOnboard: () => void
}

const useOnboardStore = create<OnboardStore>()(
  persist(
    (set) => ({
      onboard: false,
      setOnboard: (onboard) => set({ onboard }),
      resetOnboard: () => set({ onboard: false }),
    }),
    {
      name: 'onboard-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export function useOnboardStorage() {
  const { onboard, setOnboard, resetOnboard } = useOnboardStore()

  return { onboard, setOnboard, resetOnboard }
}
