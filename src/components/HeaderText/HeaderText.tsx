import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { LogOut } from 'lucide-react-native'

import { themeExtracted } from '@theme'

type HeaderTextProps = {
  title: string
  logout?: () => void
}

export function HeaderText({ title, logout }: HeaderTextProps) {
  const { colors } = themeExtracted

  const place = logout ? 'justify-between' : 'justify-center'

  return (
    <View className={`flex-row mt-6 items-center ${place}`}>
      {logout && <View className="w-6 h-6" />}

      <Text className="text-white uppercase text-lg text-center font-700">
        {title}
      </Text>

      {logout && (
        <TouchableOpacity
          className="bg-red-600/30 w-6 h-6 p-4 rounded-md items-center justify-center"
          onPress={logout}
        >
          <LogOut size={20} color={colors.danger[400]} />
        </TouchableOpacity>
      )}
    </View>
  )
}
