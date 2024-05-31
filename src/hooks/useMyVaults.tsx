import useSWR from "swr";

export const useMyVaults = () => {
    return useSWR("/my/vaults", async () => {
        // TODO: Implement
        return ["0x1234", "0x5678"];
    });
};
