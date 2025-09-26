"use client";


import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { createQLSchema } from "@/features/quicklinks/schemas";
import { useCreateQuicklinks } from "@/features/quicklinks/api/use-create-ql";

import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { normalizeUrl } from "@/lib/utils";
import Image from "next/image";


interface AddQlFormProps {
    setAdding: (val: boolean) => void;
};

export const AddQLForm = ({ setAdding }: AddQlFormProps) => {
    const { mutate, isPending } = useCreateQuicklinks();

    const form = useForm<z.infer<typeof createQLSchema>>({
        resolver: zodResolver(createQLSchema),
        defaultValues: {
            title: "",
            href: "",
            description: "",
            image: undefined,
        },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleImageChange = (file: File, field: any) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/jpg"];
        if (!allowedTypes.includes(file.type)) {
            toast.error("Unsupported file type. Please upload JPG, PNG, or SVG.");
            return;
        }

        field.onChange(file); // sets the file in react-hook-form
    };

    const onSubmit = (values: z.infer<typeof createQLSchema>) => {
        const finalValues = {
            ...values,
            href: normalizeUrl(values.href),
            image: values.image instanceof File ? values.image : "",
        };

        mutate({ form: finalValues }, {
            onSuccess: () => {
                form.reset();
                setAdding(false);
            },
            onError: () => {
                toast.error("Failed to add quicklink.");
            }
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white rounded-xl shadow border p-4 flex flex-col justify-between space-y-3"
            >
                {/* Image Upload */}
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>QL Image</FormLabel>
                            <FormControl>
                                <div className="flex flex-col">
                                    {field.value ? (
                                        <div className="relative w-full h-32 rounded-md overflow-hidden">
                                            <Image
                                                src={
                                                    field.value instanceof File
                                                        ? URL.createObjectURL(field.value)
                                                        : field.value || "/placeholder.png"
                                                }
                                                alt="Preview"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-32 bg-gray-100 flex items-center justify-center rounded-md text-gray-400">
                                            No Image Selected
                                        </div>
                                    )}

                                    <label className="mt-3 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 text-sm">
                                        <Upload className="w-4 h-4" />
                                        <span>Upload Image</span>
                                        <input
                                            type="file"
                                            accept=".jpeg,.jpg,.png,.svg"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) handleImageChange(file, field);
                                            }}
                                        />
                                    </label>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter Title" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Link */}
                <FormField
                    control={form.control}
                    name="href"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Link</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter Website Link" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Short Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="Enter Short Description" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Buttons */}
                <div className="mt-3 flex gap-2">
                    <Button type="submit" disabled={isPending} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        Add QL
                    </Button>
                    <Button
                        type="button"
                        onClick={() => {
                            setAdding(false);
                            form.reset();
                        }}
                        className="flex-1 bg-gray-300 hover:bg-gray-400"
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default AddQLForm;
