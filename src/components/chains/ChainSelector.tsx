import { FC } from "react";
import { mainnet, sepolia } from "viem/chains";
import { useChainId } from "wagmi";

export const ChainSelector: FC = () => {
    const chainId = useChainId();

    return <div>{[mainnet, sepolia].map()}</div>;
};
