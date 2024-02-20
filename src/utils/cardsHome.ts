import { ImageSourcePropType } from 'react-native'

import Arms from '@assets/Icons/arms.png'
import Inferior from '@assets/Icons/ass.png'
import Body from '@assets/Icons/body.png'
import BodyBack from '@assets/Icons/body_back.png'
import FrontBody from '@assets/Icons/front_body.png'

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
    description: 'Peito, Tríceps e Ombro',
    image: FrontBody,
  },
  {
    id: 2,
    title: 'Treino B',
    description: 'Costa e Biceps',
    image: BodyBack,
  },
  {
    id: 3,
    title: 'Treino C',
    description: 'Pernas Completas',
    image: Inferior,
  },
  {
    id: 4,
    title: 'Treino D',
    description: 'Abdômen',
    image: Body,
  },
]

export const cardsHomeFemale: Card[] = [
  {
    id: 1,
    title: 'Treino A',
    description: 'Costas, Abdome e Bíceps',
    image: Arms,
  },
  {
    id: 2,
    title: 'Treino B',
    description: 'Inferior pernas',
    image: BodyBack,
  },
  {
    id: 3,
    title: 'Treino C',
    description: 'Tórax, ombro e trícepes',
    image: Inferior,
  },
  {
    id: 4,
    title: 'Treino D',
    description: 'Posterior',
    image: Body,
  },
]
