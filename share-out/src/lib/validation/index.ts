import { z } from "zod";

export const SignupValidationSchema = z.object({
  name: z.string().min(8, { message: "Too short" }),
  username: z.string().min(8, { message: "Too short" }),
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must be atleast 8 characters.'})
});
