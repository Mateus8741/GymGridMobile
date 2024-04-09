import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type PastMetrics = {
  month: string
  weight: number
}

type PastMetricsStore = {
  pastMetric: PastMetrics[]
  addPastMetrics: (month: string, weight: number) => void
  deletePastMetrics: (month: string) => void
}

const usePastMetricsStore = create<PastMetricsStore>()(
  persist(
    (set) => ({
      pastMetric: [],
      addPastMetrics: (month, weight) =>
        set((state) => ({
          pastMetric: [...state.pastMetric, { month, weight }],
        })),
      deletePastMetrics: (month) => {
        set((state) => ({
          pastMetric: state.pastMetric.filter(
            (metric) => metric.month !== month,
          ),
        }))
      },
    }),
    {
      name: 'past-metric-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export function usePastMetricsStorage() {
  const { pastMetric, addPastMetrics, deletePastMetrics } =
    usePastMetricsStore()

  return { pastMetric, addPastMetrics, deletePastMetrics }
}
