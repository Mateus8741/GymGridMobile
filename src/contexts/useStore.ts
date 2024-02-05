import { EmployerDTO } from '@DTOS'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type EmployerStore = {
  employerStorage: EmployerDTO | null
  setEmployer: (user: EmployerDTO) => void
  removeEmployer: () => void
}

const useEmployerStore = create<EmployerStore>()(
  persist(
    (set) => ({
      employerStorage: null,
      setEmployer: (employerStorage) => set({ employerStorage }),
      removeEmployer: () => set({ employerStorage: null }),
    }),
    {
      name: 'employer-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export function useEmployerStorage() {
  const { employerStorage, setEmployer, removeEmployer } = useEmployerStore()

  return { employerStorage, setEmployer, removeEmployer }
}
