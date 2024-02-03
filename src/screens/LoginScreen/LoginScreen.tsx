import React from 'react'
import { ImageBackground, View } from 'react-native'

import BG from '@assets/imgs/bg.png'
import { EyeIcon } from 'lucide-react-native'

import { Box, TextInput } from '@components'
import { themeExtracted } from '@theme'

export function LoginScreen() {
  const { colors } = themeExtracted

  return (
    <ImageBackground
      source={BG}
      style={{ flex: 1, justifyContent: 'center' }}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <Box>
        <TextInput placeholder="Nome" />

        <View className="h-5" />

        <TextInput
          placeholder="Senha"
          rightComponent={
            <EyeIcon
              size={24}
              fill={colors.gray[100]}
              color={colors.gray[900]}
            />
          }
        />
      </Box>
    </ImageBackground>
  )
}
