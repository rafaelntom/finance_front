import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please insert a valid e-mail address"),
  password: z.string(),
});

export type FormLoginData = z.infer<typeof LoginSchema>;
