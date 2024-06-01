import { useChainId } from "wagmi";

export const useVaultBalance = (vaultId: bigint) => {
    const chainId = useChainId();

    // TODO: hook up to substream
    return [];
};
