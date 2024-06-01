import { useChainId, useReadContract } from "wagmi";

import { RESCUE_NAME_ABI } from "../abi/abi";
import { CONTRACT_ADDRESS } from "../constants";

export const useLastVaultId = () => {
    const chainId = useChainId();

    return useReadContract({
        abi: RESCUE_NAME_ABI,
        address: CONTRACT_ADDRESS[chainId],
        functionName: "lastVaultId",
        args: []
    });
};
