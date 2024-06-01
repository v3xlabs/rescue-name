import { addEnsContracts } from "@ensdomains/ensjs";
import { createConfig, webSocket } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const wagmiConfig = createConfig({
    chains: [addEnsContracts(sepolia), addEnsContracts(mainnet)],
    transports: {
        [sepolia.id]: webSocket("wss://sepolia.drpc.org"),
        [mainnet.id]: webSocket("wss://eth.drpc.org")
    }
});
