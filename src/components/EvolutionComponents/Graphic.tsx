import React from 'react'
import { Text, View } from 'react-native'

type GraphicProps = {
  month: string
  progress: number
}

export function Graphic({ progress, month }: GraphicProps) {
  return (
    <View className="flex-row mb-4">
      <Text className="text-gray-g200 text-xs">{month}</Text>

      <View className="flex-1 pl-2 pr-4">
        <View className="flex-row">
          <View
            className="h-4 bg-gray-g200/50 rounded-full mr-1"
            style={{ width: `${progress}%` }}
          />
          <Text className="text-gray-g200 text-xs">{progress}kg</Text>
        </View>
      </View>
    </View>
  )
}
