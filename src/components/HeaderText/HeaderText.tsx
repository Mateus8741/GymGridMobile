import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { ChevronLeft, LogOut } from 'lucide-react-native'

import { themeExtracted } from '@theme'

type HeaderTextProps = {
  title: string
  logout?: () => void
  canGoBack?: boolean
}

export function HeaderText({ title, canGoBack, logout }: HeaderTextProps) {
  const { colors } = themeExtracted

  const { goBack } = useNavigation()

  const place = logout || canGoBack ? 'justify-between' : 'justify-center'

  function handleGoBack() {
    goBack()
  }

  return (
    <View className={`flex-row mt-6 items-center ${place}`}>
      {canGoBack ? (
        <TouchableOpacity
          className="w-6 h-6 rounded-md items-center justify-center"
          onPress={handleGoBack}
        >
          <ChevronLeft size={24} color={colors.lemon[300]} />
        </TouchableOpacity>
      ) : (
        <View className="w-6 h-6" />
      )}

      <Text className="text-white uppercase text-lg text-center font-700">
        {title}
      </Text>

      {logout ? (
        <TouchableOpacity
          className="bg-red-600/30 w-6 h-6 p-4 rounded-md items-center justify-center"
          onPress={logout}
        >
          <LogOut size={20} color={colors.danger[400]} />
        </TouchableOpacity>
      ) : (
        <View className="w-6 h-6" />
      )}
    </View>
  )
}
