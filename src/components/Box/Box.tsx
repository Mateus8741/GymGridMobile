import React from 'react'
import * as reactNative from 'react-native'

import { useAppSafeArea } from '@hooks'

interface Props {
  scrollable?: boolean
  children: React.ReactNode
  style?: reactNative.ViewStyle
  dark?: boolean
}

export function Box({ scrollable = false, style, dark, children }: Props) {
  const Container = scrollable ? reactNative.ScrollView : reactNative.View

  const bgColor = dark ? 'black' : 'bg-white'

  const { top, bottom } = useAppSafeArea()

  return (
    <reactNative.KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={reactNative.Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Container
        style={{ flex: 1, backgroundColor: bgColor }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <reactNative.View
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 24,
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
