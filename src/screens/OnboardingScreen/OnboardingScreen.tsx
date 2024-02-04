import React from 'react'

import { onboarding } from '@utils'
import AppIntroSlider from 'react-native-app-intro-slider'

import { Onboarding } from '@components'

export function OnboardingScreen() {
  return (
    <AppIntroSlider
      data={onboarding}
      renderItem={({ item }) => <Onboarding item={item} />}
      keyExtractor={(item) => item.key}
      showNextButton
      showSkipButton
      dotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      activeDotStyle={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: 50,
        height: 10,
        borderRadius: 20,
      }}
    />
  )
}
