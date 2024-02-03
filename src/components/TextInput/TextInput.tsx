import React, { ReactElement, useRef } from 'react'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  View,
} from 'react-native'

export interface TextInputProps extends RNTextInputProps {
  label?: string
  rightComponent?: ReactElement
  leftComponent?: ReactElement
  errorMessage?: string
  moreClassName?: string
}

export function TextInput({
  label,
  rightComponent,
  leftComponent,
  errorMessage,
  moreClassName,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null)

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <View className={`mb-3 ${moreClassName}`}>
      <Pressable onPress={focusInput}>
        {label && <Text className="text-text-400 mb-2 text-base">{label}</Text>}
        <View
          className={`flex-row border-b-[1px] rounded-md items-center ${
            errorMessage ? 'border-error-600' : 'border-lemon-300'
          }`}
        >
          {leftComponent && (
            <View className="mx-2 justify-center">{leftComponent}</View>
          )}
          <RNTextInput
            className="w-full py-2 px-3 text-white"
            placeholderTextColor="gray"
            autoCapitalize="none"
            ref={inputRef}
            style={$TextInputStyle}
            {...rnTextInputProps}
          />
          {rightComponent && <View>{rightComponent}</View>}
        </View>
        {errorMessage && (
          <Text className="text-error-600 text-xs font-semiBold mt-1">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </View>
  )
}

const $TextInputStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
}
