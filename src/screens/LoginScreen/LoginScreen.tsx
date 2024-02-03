import React from 'react'
import { ImageBackground, View } from 'react-native'

import BG from '@assets/imgs/bg.png'
import { EyeIcon } from 'lucide-react-native'

import { Box, CustomButton, TextInput } from '@components'
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
        <View className="flex-grow justify-center">
          <TextInput label="Nome" />

          <View className="h-5" />

          <TextInput
            label="Senha"
            rightComponent={
              <EyeIcon
                size={24}
                fill={colors.gray[100]}
                color={colors.gray[900]}
              />
            }
          />
        </View>

        <View className="pb-7" />

        <CustomButton title="Entrar" />
      </Box>
    </ImageBackground>
  )
}
