import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.taxrefund[":trsId"]["$delete"], 200>;
type RequestType = InferRequestType<typeof client.api.taxrefund[":trsId"]["$delete"]>;

export const useDeleteTaxrefund = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({ param }) => {
            const response = await client.api.taxrefund[":trsId"]["$delete"]({ param });

            if (!response.ok){
                throw new Error("Failed to delete TR link!");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("TR link Deleted");
            queryClient.invalidateQueries({ queryKey: ["taxrefunds"]  });
            // queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
        },
        onError: () => {
            toast.error("Failed to delete TR link!");
        }
    });
    return mutation;
};