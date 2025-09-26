import { useQuery } from "@tanstack/react-query"; 

import { client } from "@/lib/rpc";

export const useGetQls = () => {
    const query = useQuery({
        queryKey: ["quicklinks"],
        queryFn: async () => {
            const response = await client.api.quicklinks.$get({ query });

            if (!response.ok) {
                throw new Error("Failed to fetch quicklinks");
            }

            const { data } = await response.json();

            return data;
        },
    });
    return query;
};