import { addEnsContracts } from "@ensdomains/ensjs";
import { createConfig, http, webSocket } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const wagmiConfig = createConfig({
    chains: [addEnsContracts(mainnet), addEnsContracts(sepolia)],
    transports: {
        [mainnet.id]: webSocket("wss://eth.drpc.org"),
        [sepolia.id]: http()
    }
});
