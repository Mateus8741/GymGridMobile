import React from 'react'

import { Box, ExerciseCards, HeaderText } from '@components'

export function ExerciseListScreen() {
  return (
    <Box>
      <HeaderText title="Perfil" canGoBack />
      <ExerciseCards />
    </Box>
  )
}
