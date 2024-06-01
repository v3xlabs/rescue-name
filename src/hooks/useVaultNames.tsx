import { useChainId } from "wagmi";

export const useVaultNames = (vaultId: bigint) => {
    const chainId = useChainId();

    // TODO: hook up to substream
    return { data: ["lucemans", "nevvdevv"] };
};
