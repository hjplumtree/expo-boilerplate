import { z } from "zod";

// Common validation schemas
export const validators = {
  // Basic validators
  required: (field: string) =>
    z.string().min(1, { message: `${field} is required` }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),

  // Simple validator function that returns error message or null
  validate: (schema: z.ZodType<any>, value: any): string | null => {
    const result = schema.safeParse(value);
    if (result.success) return null;
    return result.error.errors[0]?.message || "Invalid input";
  },
};
