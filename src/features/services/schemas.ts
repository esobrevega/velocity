// validations/service.ts
import { z } from "zod";

export const createServiceSchema = z.object({
  icon: z.string().trim().min(1, "Required"),
  title: z.string().trim().min(1, "Required"),
  shortDesc: z.string().trim().min(1, "Required"),
  category: z.string().trim().min(1, "Required"),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => (value === "" ? undefined : value)),
  ]).optional(),
  details: z.object({
    description: z.string().min(1, "Required"),
    features: z.array(z.string()).catch([]),  // ✅ always string[]
    benefits: z.array(z.string()).catch([]),  // ✅ always string[]
    popular: z.boolean(),
  }),
});


export const updateServiceSchema = createServiceSchema.extend({});
