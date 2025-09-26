"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { toast } from "sonner";

import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { updateQLSchema } from "@/features/quicklinks/schemas";
import { normalizeUrl } from "@/lib/utils";
import { useUpdateQuicklink } from "@/features/quicklinks/api/use-update-ql";

interface EditQLFormProps {
    link: {
        id: string;
        title: string;
        href: string;
        desc: string;
        img: string | File | null;
    };
    setEditingId: (val: string | null) => void;
}

export const EditQLForm = ({ link, setEditingId }: EditQLFormProps) => {
    const { mutate, isPending } = useUpdateQuicklink();

    const form = useForm<z.infer<typeof updateQLSchema>>({
        resolver: zodResolver(updateQLSchema),
        defaultValues: {
            title: link.title,
            href: link.href,
            description: link.desc,
            imageUrl: link.img ?? undefined, // handle new uploads
        },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleImageChange = (file: File, field: any) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/jpg"];
        if (!allowedTypes.includes(file.type)) {
            toast.error("Unsupported file type. Please upload JPG, PNG, or SVG.");
            return;
        }
        field.onChange(file);
    };

    const onSubmit = (values: z.infer<typeof updateQLSchema>) => {
        const finalValues = {
            ...values,
            href: normalizeUrl(values.href),
            image: values.imageUrl instanceof File ? values.imageUrl : "",
        };

        mutate(
            { form: finalValues, param: { qlsId: link.id } },
            {
                onSuccess: () => {
                    form.reset();
                    setEditingId(null);
                },
            }
        );
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
                    name="imageUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>QL Image</FormLabel>
                            <FormControl>
                                <div className="flex flex-col">
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

                                    <label className="mt-3 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 text-sm">
                                        <Upload className="w-4 h-4" />
                                        <span>Change Image</span>
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
                    <Button type="submit" disabled={isPending} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                        Save
                    </Button>
                    <Button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="flex-1 bg-gray-300 hover:bg-gray-400"
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </Form>
    );
};
