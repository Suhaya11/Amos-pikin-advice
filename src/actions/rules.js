import * as z from "zod";
import { gradePattern } from "./userSettings";

export const AddActionSchema = z.object({
  action: z.string().min(1, { message: "Name is required" }),
  reason: z
    .string()
    .max(500, { message: "Reason must be less than 500 characters" })
    .optional(),
  grade: z
    .string()
    .min(gradePattern.min, {
      message: `Grade must be at least ${gradePattern.min}`,
    })
    .max(gradePattern.max, {
      message: `Grade must be at most ${gradePattern.max}`,
    }),
});
