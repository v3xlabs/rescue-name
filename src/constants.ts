import { Address } from "viem";
import { mainnet, sepolia } from "wagmi/chains";

export const CONTRACT_ADDRESS: { [key: number]: Address } = {
    [mainnet.id]: "0x0",
    [sepolia.id]: "0x76df9537df71a0847625add11e73d780adb74a71"
};
