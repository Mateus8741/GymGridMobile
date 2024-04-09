import React from 'react'
import { Text, View } from 'react-native'

import { isCurrentMonth } from '@utils'

import { themeExtracted } from '@theme'

type GraphicProps = {
  month: string
  weight: number
}

export function Graphic({ weight, month }: GraphicProps) {
  const { colors } = themeExtracted

  const textStyle =
    isCurrentMonth === month ? 'text-lemon-300' : 'text-gray-g200'

  return (
    weight > 0 && (
      <View className="flex-row mb-4">
        <Text className={`${textStyle} text-xs`}>{month.slice(0, 3)}</Text>

        <View className="flex-1 pr-4 pl-3">
          <View className="flex-row">
            <View className="flex-1 mr-2">
              <View
                className={`h-4 rounded-full`}
                style={{
                  width: `${weight}%`,
                  backgroundColor:
                    isCurrentMonth === month
                      ? colors.lemon[900]
                      : colors.gray.g200,
                }}
              />
            </View>
            <Text className={`${textStyle} text-xs`}>{weight}kg</Text>
          </View>
        </View>
      </View>
    )
  )
}
