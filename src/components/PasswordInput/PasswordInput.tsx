import React, { useState } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { themeExtracted } from '@theme'

import { TextInput, TextInputProps } from '../TextInput/TextInput'

export type PasswordInputProps = Omit<TextInputProps, 'rightComponent'>

export function PasswordInput({ ...textInputProps }: PasswordInputProps) {
  const { colors } = themeExtracted

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev)
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...textInputProps}
      rightComponent={
        <MaterialCommunityIcons
          name={isSecureTextEntry ? 'eye' : 'eye-off'}
          onPress={toggleSecureTextEntry}
          color={colors.gray.g200}
          size={24}
        />
      }
    />
  )
}
