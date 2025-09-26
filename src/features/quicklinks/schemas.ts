import { z } from "zod";

export const createQLSchema = z.object({
    title: z.string().trim().min(1, "Required"),
    href: z.string().trim().min(1,"Required"),
    image: z.union([
        z.instanceof(File),
        z.string().transform((value) => value === "" ? undefined : value),
    ])
    .optional(),
    description: z.string().trim().min(1,"Required"),   
});

export const updateQLSchema = z.object({
    title: z.string().trim().min(1, "Must be 1 or more than chars"),
    href: z.string().trim().min(1,"Required"),
    imageUrl: z.union([
        z.instanceof(File),
        z.string().transform((value) => value === "" ? undefined : value),
    ])
    .optional(),
    description: z.string().trim().min(1,"Required"),   
})