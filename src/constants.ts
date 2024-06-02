import { Address } from "viem";
import { mainnet, sepolia } from "wagmi/chains";

export const CONTRACT_ADDRESS: { [key: number]: Address } = {
    [mainnet.id]: "0x0",
    [sepolia.id]: "0x8478988df937aeE1b9b25f6016ee5A45eBc1bb39"
};
