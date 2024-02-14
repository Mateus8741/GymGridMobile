import React from 'react'
import { Text, View } from 'react-native'

import { MONTHS } from '@utils'
import { FlatList } from 'react-native-gesture-handler'

import { Box, EvolutionMonthList, Graphic, HeaderText } from '@components'

export function EvolutionScreen() {
  return (
    <>
      <Box>
        <HeaderText title="Evolução" />

        <EvolutionMonthList />

        <View className="flex-row items-center space-x-1 mb-6">
          <Text className="text-white text-xs text-left font-400">
            Atualizado:
          </Text>

          <Text className="text-white text-xs text-left font-700">
            ontem as 21h
          </Text>
        </View>

        <FlatList
          data={MONTHS}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <Graphic month={item} progress={Math.floor(Math.random() * 100)} />
          )}
          showsVerticalScrollIndicator={false}
        />

        <View className="bg-gray-g700 rounded-t-2xl px-5 -mx-5 -mb-9 pb-5">
          <Text className="text-white text-md text-left mb-5 mt-6 font-700">
            Medidas
          </Text>

          <View className="space-y-5">
            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Peso atual</Text>
              <Text className="text-white text-md font-500">61.2 kg</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Ombro</Text>

              <Text className="text-white text-md font-500">102</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Peitoral</Text>

              <Text className="text-white text-md font-500">94</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Braço (D)</Text>

              <Text className="text-white text-md font-500">30</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Braço (E)</Text>

              <Text className="text-white text-md font-500">30</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Antebraço (D)</Text>

              <Text className="text-white text-md font-500">28</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Antebraço (E)</Text>

              <Text className="text-white text-md font-500">28</Text>
            </View>
          </View>
        </View>
      </Box>
    </>
  )
}
