import React from 'react'
import * as reactNative from 'react-native'

interface Props extends reactNative.TouchableOpacityProps {
  title: string
  isLoading?: boolean
  isDisable?: boolean
}

export function CustomButton({ title, isLoading, isDisable, ...props }: Props) {
  return (
    <reactNative.TouchableOpacity
      className={`w-full py-3 items-center rounded-md bg-lemon-900`}
      activeOpacity={0.8}
      disabled={isDisable}
      {...props}
    >
      {isLoading ? (
        <reactNative.ActivityIndicator size="small" color="#FFF" />
      ) : (
        <reactNative.Text className="text-black font-700 text-base">
          {title}
        </reactNative.Text>
      )}
    </reactNative.TouchableOpacity>
  )
}
