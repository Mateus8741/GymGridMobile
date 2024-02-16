import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import { useSignIn } from '@api'
import BG from '@assets/imgs/Onboarding-3.png'

import { Box, CustomButton, PasswordInput, TextInput } from '@components'

export function LoginScreen() {
  const [email, setEmail] = useState('t3@t.com')
  const [password, setPassword] = useState('0000')

  const { signIn } = useSignIn({ email, password })

  function handleLogin() {
    signIn()
  }

  return (
    <Box>
      <ImageBackground
        source={BG}
        style={StyleSheet.absoluteFillObject}
        imageStyle={{ resizeMode: 'cover' }}
        className="flex-1 justify-center px-5 py-10"
      >
        <View className="flex-grow justify-center">
          <Text className="text-3xl font-700 text-white text-left mb-3">
            Faça login e aproveite seu treino
          </Text>

          <Text className="text-base font-regular text-white text-left mb-8">
            Acesse sua conta
          </Text>

          <TextInput
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <View className="h-5" />

          <PasswordInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View className="pb-7" />

        <CustomButton title="Entrar" onPress={handleLogin} />
      </ImageBackground>
    </Box>
  )
}
