import { Address } from "viem";
import { mainnet, sepolia } from "wagmi/chains";

export const CONTRACT_ADDRESS: { [key: number]: Address } = {
    [mainnet.id]: "0x0",
    [sepolia.id]: "0x78AC7f4856aD34A170CE1B8dD9f9996FC6E5a291"
};
