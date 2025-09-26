"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { createTRSchema } from "@/features/taxrefund/schemas"
import { useCreateTaxRefund } from "@/features/taxrefund/api/use-create-tr"

interface AddTRFormProps {
  setAdding: (val: boolean) => void
}

export default function AddTRForm({ setAdding }: AddTRFormProps) {
  const { mutate, isPending } = useCreateTaxRefund()

  const form = useForm<z.infer<typeof createTRSchema>>({
    resolver: zodResolver(createTRSchema),
    defaultValues: {
      state: "",
      href: "",
    },
  })

  const onSubmit = (values: z.infer<typeof createTRSchema>) => {
    mutate(
      { form: values },
      {
        onSuccess: () => {
          toast.success("State added successfully!")
          form.reset()
          setAdding(false)
        },
        onError: () => {
          toast.error("Failed to add state")
        },
      }
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white rounded-xl shadow border p-6 flex flex-col justify-between space-y-4"
      >
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter state name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="href"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Refund URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter refund link" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 mt-2">
          <Button type="submit" disabled={isPending} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
            Save
          </Button>
          <Button
            type="button"
            onClick={() => setAdding(false)}
            className="flex-1 bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}
