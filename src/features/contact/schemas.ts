import { z } from "zod";

export const createContactSchemaFE = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Please enter a valid email (sample@gmail.com)"),
    phoneNumber: z.string().min(6, "Phone number is required"),
    service: z.string().min(1, "Please select a service"),
    time: z.string().min(1, "Please specify the best time to contact you"),
    message: z.string().optional(),
    consent: z.boolean().refine(val => val === true, {
        message: "You must agree to continue",
    }),
});

export const createContactSchemaBE = z.object({
    name: z.string().trim().min(1, "Name is required"),
    phoneNumber: z.string().min(6, "Phone number is required"),
    email: z.string().trim().email("Must be a valid email address"),
    service: z.string().trim().min(1, "Service is required"),
    time: z.string().trim().min(1, "Time is required"),
    message: z.string().optional(),
});