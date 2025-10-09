import { useQuery } from "@tanstack/react-query"; 

import { client } from "@/lib/rpc";

export const useGetContacts = () => {
    const query = useQuery({
        queryKey: ["contacts"],
        queryFn: async () => {
            const response = await client.api.contact.$get({ query });

            if (!response.ok) {
                throw new Error("Failed to fetch contacts");
            }

            const { data } = await response.json();

            return data;
        },
    });
    return query;
};