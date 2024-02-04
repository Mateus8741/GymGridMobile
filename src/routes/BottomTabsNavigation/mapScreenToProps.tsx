import { AppTabBottomTabParamList } from './AppTabNavigator'

interface IconProps {
  label: string
  icon: {
    focused: string
    unfocused: string
  }
  color: string
}

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string
    icon: {
      focused: IconProps['color']
      unfocused: IconProps['color']
    }
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'Home',
      unfocused: 'Home',
    },
  },
  HistoryScreen: {
    label: 'Histórico',
    icon: {
      focused: 'History',
      unfocused: 'History',
    },
  },
  EvolutionScreen: {
    label: 'Evolução',
    icon: {
      focused: 'ArrowUpWideNarrow',
      unfocused: 'ArrowUpWideNarrow',
    },
  },
}
