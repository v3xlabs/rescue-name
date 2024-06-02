import axios from "axios";
import { gql } from "graphql-request";
import useSWR from "swr";
import { useBlockNumber, useChainId } from "wagmi";

const query = gql`
    query byVault($vaultId: BigFloat) {
        allRescuenameNameAddeds(condition: { vault: $vaultId }) {
            nodes {
                name
            }
        }
    }
`;

export type ExpiryNames = {
    data: {
        allRescuenameNameAddeds: {
            nodes: {
                name: string;
            }[];
        };
    };
};
export const useVaultNames = (vaultId: bigint) => {
    const chainId = useChainId();
    const { data: block } = useBlockNumber({ chainId });

    return useSWR(
        "/subgraph/" + vaultId + "/" + block,
        async (): Promise<string[]> => {
            const x = await axios.post(
                // Yes, this uses a cors-anywhere bypass. This is a demo.
                // The streamingfast entrypoint doesnt output the right cors headers
                "https://cors-anywhere.herokuapp.com/https://srv.streamingfast.io/01bfe668/graphql",
                {
                    query,
                    variables: { vaultId: vaultId.toString() }
                }
            );

            const xy = x.data as ExpiryNames;

            console.log({ xy });

            return xy.data.allRescuenameNameAddeds.nodes
                .filter((node) => node.name.length >= 5)
                .map((node) => node.name);
        }
    );
};
