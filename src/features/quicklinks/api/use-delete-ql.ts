import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.quicklinks[":qlsId"]["$delete"], 200>;
type RequestType = InferRequestType<typeof client.api.quicklinks[":qlsId"]["$delete"]>;

export const useDeleteQuicklink = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({ param }) => {
            const response = await client.api.quicklinks[":qlsId"]["$delete"]({ param });

            if (!response.ok){
                throw new Error("Failed to delete QL!");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Quicklink Deleted");
            queryClient.invalidateQueries({ queryKey: ["quicklinks"]  });
            // queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
        },
        onError: () => {
            toast.error("Failed to delete Quicklink!");
        }
    });
    return mutation;
};