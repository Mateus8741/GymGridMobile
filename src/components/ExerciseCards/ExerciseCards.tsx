import React from 'react'
import { Text, View } from 'react-native'

import { ChevronRight } from 'lucide-react-native'

export function ExerciseCards() {
  return (
    <View className="bg-black rounded-md p-3 flex-row justify-between items-center mb-2">
      <View className="space-y-2">
        <Text className="text-white font-700">Agachamento</Text>
        <Text className="text-white font-400 text-xs">
          3 séries de 15 repetições
        </Text>
      </View>

      <ChevronRight className="text-lemon-300" size={24} />
    </View>
  )
}
