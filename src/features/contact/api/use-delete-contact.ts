import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.contact[":contactId"]["$delete"], 200>;
type RequestType = InferRequestType<typeof client.api.contact[":contactId"]["$delete"]>;

export const useDeleteContact = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({ param }) => {
            const response = await client.api.contact[":contactId"]["$delete"]({ param });

            if (!response.ok){
                throw new Error("Failed to delete contact!");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Contact Deleted!");
            queryClient.invalidateQueries({ queryKey: ["contacts"]  });
            // queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
        },
        onError: () => {
            toast.error("Failed to contact!");
        }
    });
    return mutation;
};