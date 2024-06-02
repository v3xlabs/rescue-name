import { Address } from "viem";
import { mainnet, sepolia } from "wagmi/chains";

export const CONTRACT_ADDRESS: { [key: number]: Address } = {
    [mainnet.id]: "0x0",
    [sepolia.id]: "0x53d35F2735293Ca4b5599f378aC41a60b3910Ba5"
};
