import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.contact["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.contact["$post"]>;

export const useCreateContact = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({form}) => {
            const response = await client.api.contact["$post"]({ form });
            
            if (!response.ok){
                throw new Error("Contact not created");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Contact Submitted!");
            queryClient.invalidateQueries({ queryKey: ["taxrefunds"] });
        },
        onError: () => {
            toast.error("Submission Failed!");
        }
    });
    return mutation;
};