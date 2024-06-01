import { getExpiry } from "@ensdomains/ensjs/public";
import useSWR from "swr";
import { useClient } from "wagmi";

export const useExpiry = (name: string) => {
    const client = useClient();

    return useSWR(`/name/${name}`, async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return await getExpiry(client as unknown, { name });
    });
};
