import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.auth.register["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.register["$post"]>;

export const useCreateUser = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async({json}) => {
            const response = await client.api.auth.register["$post"]({ json });
            
            if (!response.ok){
                throw new Error("Admin creation failed");
            }
            
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Successfully Created!");
            router.refresh();
            queryClient.invalidateQueries({ queryKey: ["current"] });
            // router.push("/");
            // Optionally, you can redirect or perform other actions after login
        },
        onError: () => {
            toast.error("Login Failed");
        }
    });
    return mutation;
};