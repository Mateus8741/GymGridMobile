import React from 'react'
import * as reactNative from 'react-native'

import { icons } from 'lucide-react-native'

import { themeExtracted } from '@theme'

interface Props extends reactNative.TouchableOpacityProps {
  title: string
  isLoading?: boolean
  isDisable?: boolean
  rightComponent?: keyof typeof icons
}

export function DarkButton({
  title,
  isLoading,
  isDisable,
  rightComponent: iconKey,
  ...props
}: Props) {
  const { colors } = themeExtracted

  const Icon = iconKey ? icons[iconKey] : null

  return (
    <reactNative.TouchableOpacity
      className={`w-full flex-row p-3 items-left justify-between rounded-md bg-gray-g900`}
      activeOpacity={0.8}
      disabled={isDisable}
      {...props}
    >
      {isLoading ? (
        <reactNative.ActivityIndicator size="small" color="#FFF" />
      ) : (
        <>
          <reactNative.Text className="text-white font-400 text-sm">
            {title}
          </reactNative.Text>

          {Icon && (
            <reactNative.View>
              <Icon size={20} color={colors.lemon[300]} />
            </reactNative.View>
          )}
        </>
      )}
    </reactNative.TouchableOpacity>
  )
}
