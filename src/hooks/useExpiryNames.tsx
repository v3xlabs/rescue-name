import axios from "axios";
import { gql } from "graphql-request";
import useSWR from "swr";

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
    return useSWR(
        "/my/names",
        async (): Promise<{ name: string; vault: string }[]> => {
            const x = await axios.post(
                // Yes, this uses a cors-anywhere bypass. This is a demo.
                // The streamingfast entrypoint doesnt output the right cors headers
                "https://cors-anywhere.herokuapp.com/https://srv.streamingfast.io/708f83b3/graphql",
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
