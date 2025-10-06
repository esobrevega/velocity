// hooks/useServiceForm.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createServiceSchema, updateServiceSchema } from "../schemas";

// Types
export type CreateServiceForm = z.infer<typeof createServiceSchema>;
export type UpdateServiceForm = z.infer<typeof updateServiceSchema>;

// Create form
export const useCreateServiceForm = () => {
  return useForm<CreateServiceForm>({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      icon: "",
      title: "",
      shortDesc: "",
      category: "",
      image: undefined, // required → start empty string
      details: {
        description: "",
        features: [], // matches array
        benefits: [], // matches array
        popular: false, // matches boolean
      },
    },
  });
};

// Update form
export const useUpdateServiceForm = (defaults?: Partial<UpdateServiceForm>) =>
  useForm<UpdateServiceForm>({
    resolver: zodResolver(updateServiceSchema),
    defaultValues: {
      icon: defaults?.icon ?? "",
      title: defaults?.title ?? "",
      shortDesc: defaults?.shortDesc ?? "",
      category: defaults?.category ?? "",
      image: defaults?.image ?? undefined,
      details: {
        description: defaults?.details?.description ?? "",
        features: defaults?.details?.features ?? [],
        benefits: defaults?.details?.benefits ?? [],
        popular: defaults?.details?.popular ?? false,
      },
    },
  });
