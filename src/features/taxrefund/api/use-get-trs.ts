import { useQuery } from "@tanstack/react-query"; 

import { client } from "@/lib/rpc";

export const useGetTrs = () => {
    const query = useQuery({
        queryKey: ["taxrefunds"],
        queryFn: async () => {
            const response = await client.api.taxrefund.$get({ query });

            if (!response.ok) {
                throw new Error("Failed to fetch TR links");
            }

            const { data } = await response.json();

            return data;
        },
    });
    return query;
};