import { useChainId, useReadContract } from "wagmi";

import { RESCUE_NAME_ABI, BASE_REGISTRAR_ABI, ETH_REGISTRAR_ABI } from "../abi/abi";
import { CONTRACT_ADDRESS, ETH_REGISTRAR_ADDRESS, BASE_REGISTRAR_ADDRESS } from "../constants";

export const useLastVaultId = () => {
    const chainId = useChainId();

    const bingus = useReadContract({
        abi: RESCUE_NAME_ABI,
        address: CONTRACT_ADDRESS[chainId],
        functionName: "vaultNameList",
        args: [1, 'vitalik']
    });

    console.log(bingus)

    const bingus2 = useReadContract({
        abi: ETH_REGISTRAR_ABI,
        address: ETH_REGISTRAR_ADDRESS[chainId],
        functionName: "rentPrice",
        args: ['vitalik', 365 * 24 * 60 * 60]
    });

    console.log(bingus2)

    return useReadContract({
        abi: RESCUE_NAME_ABI,
        address: CONTRACT_ADDRESS[chainId],
        functionName: "lastVaultId",
        args: []
    });
};
