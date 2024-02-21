/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from '@utils';

import { ExerciseCardsProps } from '@components';
import { ExerciseDetailsScreen, ExerciseListScreen } from '@screens';

import {
  AppTabBottomTabParamList,
  AppTabNavigator,
} from './BottomTabsNavigation/AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  ExerciseListScreen: { card: Card }
  ExerciseDetailsScreen: { card: ExerciseCardsProps };
};

export function AppStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

  return (
    <Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Screen name="ExerciseListScreen" component={ExerciseListScreen} />
      <Screen name="ExerciseDetailsScreen" component={ExerciseDetailsScreen} />
    </Navigator>
  );
}
