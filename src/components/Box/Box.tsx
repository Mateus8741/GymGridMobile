import React from 'react'
import * as reactNative from 'react-native'

import { useAppSafeArea } from '@hooks'
import { themeExtracted } from '@theme'

interface Props {
  scrollable?: boolean
  children: React.ReactNode
  style?: reactNative.ViewStyle
}

export function Box({ scrollable = false, style, children }: Props) {
  const Container = scrollable ? reactNative.ScrollView : reactNative.View

  const { top, bottom } = useAppSafeArea()

  const { colors } = themeExtracted

  return (
    <reactNative.KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={reactNative.Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Container
        style={{ flex: 1, backgroundColor: colors.gray.g900 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <reactNative.View
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 20,
              paddingTop: top,
              paddingBottom: bottom,
            },
            style,
          ]}
        >
          {children}
        </reactNative.View>
      </Container>
    </reactNative.KeyboardAvoidingView>
  )
}
