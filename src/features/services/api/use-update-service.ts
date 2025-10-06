import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.services[":serviceId"]["$patch"], 200>;
type RequestType = InferRequestType<typeof client.api.services[":serviceId"]["$patch"]>;

export const useUpdateService = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({form, param}) => {
            const response = await client.api.services[":serviceId"]["$patch"]({ form, param });

            if (!response.ok){
                throw new Error("Service update failed");
            }
            
            return await response.json();
        },
        onSuccess: ({ data }) => {
            toast.success("Service Updated");
            queryClient.invalidateQueries({ queryKey: ["services"]  });
            // queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
        },
        onError: () => {
            toast.error("Service update failed!");
        }
    });
    return mutation;
};