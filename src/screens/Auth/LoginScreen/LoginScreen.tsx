import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import { useSignIn } from '@api'
import BG from '@assets/imgs/Onboarding-3.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginScheema, loginScheema } from '@schemas'
import { useForm } from 'react-hook-form'

import { Box, FormTextInput, GreenButton } from '@components'

export function LoginScreen() {
  const { control, handleSubmit, watch } = useForm<LoginScheema>({
    resolver: zodResolver(loginScheema),

    defaultValues: {
      email: '',
      password: '',
    },

    mode: 'onChange',
  })

  const email = watch('email')
  const password = watch('password')

  const { signIn } = useSignIn({ email, password })

  function useHandleLogin() {
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

          <FormTextInput
            control={control}
            name="email"
            placeholder="E-mail"
            keyboardType="email-address"
          />

          <View className="h-5" />

          <FormTextInput
            control={control}
            name="password"
            placeholder="Senha"
          />
        </View>

        <View className="pb-7" />

        <GreenButton title="Entrar" onPress={handleSubmit(useHandleLogin)} />
      </ImageBackground>
    </Box>
  )
}
