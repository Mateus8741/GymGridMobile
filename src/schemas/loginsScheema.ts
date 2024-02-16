import { z } from 'zod'

export const loginScheema = z.object({
  email: z.string().email('Endereço de e-mail inválido'),
  password: z.string().min(4, 'A senha deve ter no mínimo 4 caracteres'),
})

export type LoginScheema = z.infer<typeof loginScheema>
