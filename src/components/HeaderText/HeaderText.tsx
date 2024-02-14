import React from 'react'
import { Text } from 'react-native'

type HeaderTextProps = {
  title: string
}

export function HeaderText({ title }: HeaderTextProps) {
  return (
    <Text className="text-white uppercase text-lg text-center mt-6 font-700">
      {title}
    </Text>
  )
}
