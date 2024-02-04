import { icons } from 'lucide-react-native'
import Animated from 'react-native-reanimated'

type IconProps = {
  name: string
  color: string
  size: number
  entering: any
}

export function CustonIcons({ name, color, size, entering }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons]

  const AnimatedIcon = Animated.createAnimatedComponent(LucideIcon)

  return <AnimatedIcon color={color} size={size} entering={entering} />
}
