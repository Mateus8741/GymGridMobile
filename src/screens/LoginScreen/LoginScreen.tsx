import React from 'react'
import { View } from 'react-native'

import { EyeIcon } from 'lucide-react-native'

import { Box, TextInput } from '@components'
import { themeExtracted } from '@theme'

export function LoginScreen() {
  const { colors } = themeExtracted

  return (
    <Box dark>
      <TextInput placeholder="Nome" />

      <View className="h-5" />

      <TextInput
        placeholder="Senha"
        rightComponent={
          <EyeIcon size={24} fill={colors.gray[100]} color={colors.gray[900]} />
        }
      />
    </Box>
  )
}
