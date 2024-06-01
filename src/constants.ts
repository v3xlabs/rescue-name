import { Address } from "viem";
import { mainnet, sepolia } from "wagmi/chains";

export const CONTRACT_ADDRESS: { [key: number]: Address } = {
    [mainnet.id]: "0x0",
    [sepolia.id]: "0xf8078fdDF72FEc08bEB3d128CaBBD8525837a265"
};
