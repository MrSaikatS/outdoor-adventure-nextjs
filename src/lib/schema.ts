import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  email: z.string().email().includes("@", { message: "Invalid email" }),
  message: z.string().min(10, { message: "Message is too short" }),
});
