import { FC } from "react";
import { mainnet } from "viem/chains";
import { useChainId, useSwitchChain } from "wagmi";

export const ChainSelector: FC = () => {
    const chainId = useChainId();
    const { switchChain, chains } = useSwitchChain();

    return (
        <div className="group relative">
            <button className="relative z-10 flex h-10 min-w-32 justify-center gap-1 rounded-xl border border-border bg-background-primary px-4 py-2 pl-3 leading-snug">
                {chainId === mainnet.id ? "Mainnet" : "Sepolia"}
            </button>

            <div className="absolute inset-x-0 -mt-2 hidden flex-col items-center text-nowrap rounded-b-lg border border-border bg-background-primary pt-2 group-hover:flex">
                {chains
                    .filter((chain) => chain.id != chainId)
                    .map((chain) => (
                        <button
                            key={chain.id}
                            className={
                                chain.id === chainId
                                    ? ""
                                    : "text-text-secondary"
                            }
                            onClick={() => switchChain({ chainId: chain.id })}
                        >
                            {chain.name}
                        </button>
                    ))}
            </div>
        </div>
    );
};
