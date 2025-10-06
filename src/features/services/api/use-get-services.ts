import { useQuery } from "@tanstack/react-query"; 

import { client } from "@/lib/rpc";

export const useGetServices = () => {
    const query = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const response = await client.api.services.$get({ query });

            if (!response.ok) {
                throw new Error("Failed to fetch services");
            }

            const { data } = await response.json();

            return data;
        },
    });
    return query;
};