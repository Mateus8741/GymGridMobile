import React from 'react'
import { Text, View } from 'react-native'

import { useEvolution } from '@api'
import { monthsUntilCurrent } from '@utils'
import { FlatList } from 'react-native-gesture-handler'

import { Box, EvolutionMonthList, Graphic, HeaderText } from '@components'

export function EvolutionScreen() {
  const { Evolution } = useEvolution()

  const formatedTime = new Date(Evolution?.updated_at || '').toLocaleDateString(
    'pt-BR',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    },
  )

  console.log(formatedTime)

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
            {formatedTime}
          </Text>
        </View>

        <FlatList
          data={monthsUntilCurrent}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <Graphic
              month={item}
              progress={Number(Evolution?.current_weight)}
            />
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
              <Text className="text-white text-md font-500">
                {Evolution?.current_weight} kg
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Ombro</Text>

              <Text className="text-white text-md font-500">
                {Evolution?.shoulders}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Peitoral</Text>

              <Text className="text-white text-md font-500">
                {Evolution?.breastplate}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Braço (D)</Text>

              <Text className="text-white text-md font-500">
                {Evolution?.arm_r}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Braço (E)</Text>

              <Text className="text-white text-md font-500">
                {Evolution?.arm_l}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Antebraço (D)</Text>

              <Text className="text-white text-md font-500">
                {Evolution?.forearm_r}
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-white text-md font-500">Antebraço (E)</Text>

              <Text className="text-white text-md font-500">
                {Evolution?.forearm_l}
              </Text>
            </View>
          </View>
        </View>
      </Box>
    </>
  )
}
