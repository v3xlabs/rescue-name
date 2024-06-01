import { addEnsContracts } from "@ensdomains/ensjs";
import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";

export const wagmiConfig = createConfig({
    chains: [
        // addEnsContracts(mainnet),
        addEnsContracts(sepolia)
    ],
    transports: {
        // [mainnet.id]: webSocket("wss://eth.drpc.org"),
        [sepolia.id]: http()
    }
});
