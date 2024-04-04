import React from 'react'
import * as reactNative from 'react-native'

import { themeExtracted } from '@theme'

interface Props extends reactNative.TouchableOpacityProps {
  title: string
  isLoading?: boolean
  isDisable?: boolean
}

export function GreenButton({ title, isLoading, isDisable, ...props }: Props) {
  const { colors } = themeExtracted

  return (
    <reactNative.TouchableOpacity
      className={`w-full py-3 items-center rounded-md bg-lemon-300`}
      activeOpacity={0.8}
      disabled={isDisable}
      {...props}
    >
      {isLoading ? (
        <reactNative.ActivityIndicator size="small" color={colors.gray.g900} />
      ) : (
        <reactNative.Text className="text-black font-700 text-base">
          {title}
        </reactNative.Text>
      )}
    </reactNative.TouchableOpacity>
  )
}
