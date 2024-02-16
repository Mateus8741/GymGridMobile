import { z } from 'zod'

export const profileScheema = z.object({
  name: z.string().optional(),
  age: z.number().optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
  gender: z.string().optional(),
})

export type ProfileScheema = z.infer<typeof profileScheema>
