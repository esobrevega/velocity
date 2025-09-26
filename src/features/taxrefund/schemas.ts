import { z } from "zod";

export const createTRSchema = z.object({
    state: z.string().trim().min(1, "State name is Required"),
    href: z.string().trim().min(1,"Must be a valid URL"),   
});

export const updateTRSchema = z.object({
    state: z.string().trim().min(1, "Must be 1 or more than chars"),
    href: z.string().trim().min(1,"Must be a valid URL"),   
})