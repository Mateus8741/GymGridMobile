import React from 'react'
import { View } from 'react-native'

import { EyeIcon } from 'lucide-react-native'

import { Box, TextInput } from '@components'

export function LoginScreen() {
  return (
    <Box dark>
      <TextInput placeholder="Nome" />

      <View className="h-5" />

      <TextInput placeholder="Senha" rightComponent={<EyeIcon size={24} />} />
    </Box>
  )
}
