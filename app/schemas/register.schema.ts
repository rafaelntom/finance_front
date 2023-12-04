import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z.string().min(1, { message: "Confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterPayload = z.infer<typeof RegisterSchema>;
