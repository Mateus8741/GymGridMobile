import React from 'react'

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import {
  EvolutionScreen,
  HistoryScreen,
  HomeScreen,
  ProfileScreen,
} from '@screens'

import { AppTabBar } from './AppTabBar'

export type AppTabBottomTabParamList = {
  HomeScreen: undefined
  HistoryScreen: undefined
  EvolutionScreen: undefined
  ProfileScreen: undefined
}

function renderTabBar(props: BottomTabBarProps) {
  return <AppTabBar {...props} />
}

export function AppTabNavigator() {
  const { Navigator, Screen } =
    createBottomTabNavigator<AppTabBottomTabParamList>()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderTabBar}
    >
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="HistoryScreen" component={HistoryScreen} />
      <Screen name="EvolutionScreen" component={EvolutionScreen} />
      <Screen name="ProfileScreen" component={ProfileScreen} />
    </Navigator>
  )
}
