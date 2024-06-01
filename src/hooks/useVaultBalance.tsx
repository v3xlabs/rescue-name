import { useChainId, useReadContract } from "wagmi";

import { RESCUE_NAME_ABI } from "../abi/abi";
import { CONTRACT_ADDRESS } from "../constants";

export const useVaultBalance = (vaultId: bigint) => {
    const chainId = useChainId();

    return useReadContract({
        abi: RESCUE_NAME_ABI,
        address: CONTRACT_ADDRESS[chainId],
        functionName: "vaultBalance",
        args: [vaultId]
    });
};
