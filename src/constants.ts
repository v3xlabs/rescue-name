import { Address } from "viem";
import { mainnet, sepolia } from "wagmi/chains";

export const CONTRACT_ADDRESS: { [key: number]: Address } = {
    [mainnet.id]: "0x0",
    [sepolia.id]: "0x53d35F2735293Ca4b5599f378aC41a60b3910Ba5"
};

export const BASE_REGISTRAR_ADDRESS: { [key: number]: Address } = {
    [mainnet.id]: "0x0",
    [sepolia.id]: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85"
};

export const ETH_REGISTRAR_ADDRESS: { [key: number]: Address } = {
    [mainnet.id]: "0x0",
    [sepolia.id]: "0xFED6a969AaA60E4961FCD3EBF1A2e8913ac65B72"
};
