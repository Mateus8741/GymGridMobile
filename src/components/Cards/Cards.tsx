import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { Card } from '@utils'

type CardProps = TouchableOpacityProps & {
  data: Card
}

export function Cards({ data, ...props }: CardProps) {
  return (
    <TouchableOpacity
      className="w-[182px] mb-3 -mx-3 p-3 rounded-xl bg-black"
      {...props}
    >
      <Image
        source={data.image}
        className="w-14 h-14 mb-3 rounded-lg"
        alt="Exercícios"
      />
      <Text className="text-white font-700 text-base">{data.title}</Text>
      <Text className="text-white font-500 text-xs">{data.description}</Text>
    </TouchableOpacity>
  )
}
