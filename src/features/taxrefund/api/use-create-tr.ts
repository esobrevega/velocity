import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.taxrefund["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.taxrefund["$post"]>;

export const useCreateTaxRefund = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({form}) => {
            const response = await client.api.taxrefund["$post"]({ form });
            
            if (!response.ok){
                throw new Error("Link not created");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Link successfully created!");
            queryClient.invalidateQueries({ queryKey: ["taxrefunds"] });
        },
        onError: () => {
            toast.error("Link creation failed!");
        }
    });
    return mutation;
};