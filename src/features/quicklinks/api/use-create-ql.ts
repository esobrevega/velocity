import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.quicklinks["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.quicklinks["$post"]>;

export const useCreateQuicklinks = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({form}) => {
            const response = await client.api.quicklinks["$post"]({ form });
            
            if (!response.ok){
                throw new Error("Quicklink not created");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("QL successfully created!");
            queryClient.invalidateQueries({ queryKey: ["quicklinks"] });
        },
        onError: () => {
            toast.error("QL creation failed!");
        }
    });
    return mutation;
};