import * as z from 'zod';

export const LoginSchema = z.object({
    
      email: z.string().min(1, {
              message: "Please enter your name"
      }),
      password: z.string().min(4, {
         message: "Password must be at least 4 characters long"
      }),
      remember: z.boolean(),
})