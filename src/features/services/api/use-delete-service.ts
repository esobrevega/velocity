import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.services[":serviceId"]["$delete"], 200>;
type RequestType = InferRequestType<typeof client.api.services[":serviceId"]["$delete"]>;

export const useDeleteService = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({ param }) => {
            const response = await client.api.services[":serviceId"]["$delete"]({ param });

            if (!response.ok){
                throw new Error("Failed to delete Service!");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Service Deleted");
            queryClient.invalidateQueries({ queryKey: ["services"]  });
            // queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
        },
        onError: () => {
            toast.error("Failed to delete Service!");
        }
    });
    return mutation;
};