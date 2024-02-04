import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useShadowProps } from '@utils'

import { CustonIcons } from '@components'
import { useAppSafeArea } from '@hooks'
import { themeExtracted } from '@theme'

import { AppTabBottomTabParamList } from './AppTabNavigator'
import { mapScreenToProps } from './mapScreenToProps'

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea()

  const { colors } = themeExtracted

  return (
    <View
      className="flex-row pt-3 bg-gray-900 dark:bg-gray-900"
      style={[{ paddingBottom: bottom }, useShadowProps()]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            })
          }
        }

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList]

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={1}
            className="flex-row justify-center items-center gap-x-3"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <CustonIcons
              color={isFocused ? colors.lemon[300] : colors.gray[300]}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
              size={20}
            />
            {isFocused && (
              <Text
                className="text-xs font-bold"
                style={{ color: colors.lemon[300] }}
              >
                {tabItem.label}
              </Text>
            )}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
