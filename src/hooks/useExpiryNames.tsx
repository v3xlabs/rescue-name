import axios from "axios";
import { gql } from "graphql-request";
import useSWR from "swr";
import { useBlockNumber, useChainId } from "wagmi";

const query = gql`
    {
        query {
            allRescuenameNameAddeds {
                nodes {
                    name
                    vault
                }
            }
        }
    }
`;

export type ExpiryNames = {
    data: {
        query: {
            allRescuenameNameAddeds: {
                nodes: {
                    name: string;
                    vault: string; // but number
                }[];
            };
        };
    };
};

export const useExpiryNames = () => {
    const chainId = useChainId();
    const { data: block } = useBlockNumber({ chainId });

    return useSWR(
        "/subgrpah/" + block,
        async (): Promise<{ name: string; vault: string }[]> => {
            const x = await axios.post(
                // Yes, this uses a cors-anywhere bypass. This is a demo.
                // The streamingfast entrypoint doesnt output the right cors headers
                "https://cors-anywhere.herokuapp.com/https://srv.streamingfast.io/01bfe668/graphql",
                {
                    query
                }
            );

            const xy = x.data as ExpiryNames;

            return xy.data.query.allRescuenameNameAddeds.nodes.filter(
                (node) => node.name.length >= 5
            );
        }
    );
};
