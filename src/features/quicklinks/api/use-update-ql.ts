import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.quicklinks[":qlsId"]["$patch"], 200>;
type RequestType = InferRequestType<typeof client.api.quicklinks[":qlsId"]["$patch"]>;

export const useUpdateQuicklink = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({form, param}) => {
            const response = await client.api.quicklinks[":qlsId"]["$patch"]({ form, param });

            if (!response.ok){
                throw new Error("Ql update failed");
            }
            
            return await response.json();
        },
        onSuccess: ({ data }) => {
            toast.success("Quicklink Updated");
            queryClient.invalidateQueries({ queryKey: ["quicklinks"]  });
            // queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
        },
        onError: () => {
            toast.error("Quicklink update failed!");
        }
    });
    return mutation;
};