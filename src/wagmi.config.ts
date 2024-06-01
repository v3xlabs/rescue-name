import { addEnsContracts } from "@ensdomains/ensjs";
import { createConfig, webSocket } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const wagmiConfig = createConfig({
    chains: [addEnsContracts(mainnet), addEnsContracts(sepolia)],
    transports: {
        [mainnet.id]: webSocket("wss://eth.drpc.org"),
        [sepolia.id]: webSocket("wss://sepolia.drpc.org")
    }
});
