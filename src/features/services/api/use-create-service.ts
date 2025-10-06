import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.services["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.services["$post"]>;

export const useCreateService = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({form}) => {
            const response = await client.api.services["$post"]({ form });
            
            if (!response.ok){
                throw new Error("Service not created");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Service successfully created!");
            queryClient.invalidateQueries({ queryKey: ["services"] });
        },
        onError: () => {
            toast.error("Service creation failed!");
        }
    });
    return mutation;
};