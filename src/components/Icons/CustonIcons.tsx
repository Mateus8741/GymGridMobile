import { icons } from 'lucide-react-native'

type IconProps = {
  name: string
  color: string
  size: number
}

export function CustonIcons({ name, color, size }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons]

  return <LucideIcon color={color} size={size} />
}
