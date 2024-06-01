import useSWR from "swr";
import { useChainId, useReadContract } from "wagmi";

import { RESCUE_NAME_ABI } from "../abi/abi";
import { CONTRACT_ADDRESS } from "../constants";
import { Vault } from "../types/vault";

export const useMyVaults = () => {
    const chainId = useChainId();
    const { data: lastVaultId } = useReadContract({
        abi: RESCUE_NAME_ABI,
        address: CONTRACT_ADDRESS[chainId],
        functionName: "lastVaultId"
    });

    console.log({ lastVaultId });

    return useSWR("/my/vaults", async (): Promise<Vault[]> => {
        // TODO: Implement
        return [
            {
                address: "0x225f137127d9067788314bc7fcc1f36746a3c3B5",
                owner: "0x225f137127d9067788314bc7fcc1f36746a3c3B5",
                balance: "0.1",
                name_count: 1
            },
            {
                address: "0x225f137127d9067788314bc7fcc1f36746a3c3B5",
                owner: "0x225f137127d9067788314bc7fcc1f36746a3c3B5",
                balance: "0.2",
                name_count: 2
            }
        ];
    });
};
