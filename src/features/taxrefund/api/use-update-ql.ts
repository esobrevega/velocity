import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.taxrefund[":trsId"]["$patch"], 200>;
type RequestType = InferRequestType<typeof client.api.taxrefund[":trsId"]["$patch"]>;

export const useUpdateTaxrefund = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({form, param}) => {
            const response = await client.api.taxrefund[":trsId"]["$patch"]({ form, param });

            if (!response.ok){
                throw new Error("TR link update failed");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("TR link Updated");
            queryClient.invalidateQueries({ queryKey: ["taxrefunds"]  });
            // queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
        },
        onError: () => {
            toast.error("TR link update failed!");
        }
    });
    return mutation;
};