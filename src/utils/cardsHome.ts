import { ImageSourcePropType } from 'react-native'

import Sl1 from '@assets/Icons/arms.png'
import Sl4 from '@assets/Icons/ass.png'
import Sl3 from '@assets/Icons/body.png'
import Sl2 from '@assets/Icons/legs.png'

export type Card = {
  id: number
  image: ImageSourcePropType
  title: string
  description: string
}

export const cardsHomeMale: Card[] = [
  {
    id: 1,
    title: 'Treino A',
    description: 'Costas, Abdome e Bíceps',
    image: Sl1,
  },
  {
    id: 2,
    title: 'Treino B',
    description: 'Inferior pernas',
    image: Sl2,
  },
  {
    id: 3,
    title: 'Treino C',
    description: 'Tórax, ombro e trícepes',
    image: Sl3,
  },
  {
    id: 4,
    title: 'Treino D',
    description: 'Posterior',
    image: Sl4,
  },
]

export const cardsHomeFemale: Card[] = [
  {
    id: 1,
    title: 'Treino A',
    description: 'Costas, Abdome e Bíceps',
    image: Sl1,
  },
  {
    id: 2,
    title: 'Treino B',
    description: 'Inferior pernas',
    image: Sl2,
  },
  {
    id: 3,
    title: 'Treino C',
    description: 'Tórax, ombro e trícepes',
    image: Sl3,
  },
  {
    id: 4,
    title: 'Treino D',
    description: 'Posterior',
    image: Sl4,
  },
]
