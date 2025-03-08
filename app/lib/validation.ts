import { z } from 'zod'

export const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  message: z.string().min(2, 'Message must be at least 2 characters')
})
