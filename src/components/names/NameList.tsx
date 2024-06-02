import clsx from "clsx";
import { RescueModal } from "components/modals/RescueModal";
import { gql } from "graphql-request";
import { useExpiryNames } from "hooks/useExpiryNames";
import { useCallback, useState } from "react";
import { useAccount } from "wagmi";

import { NameEntry } from "./NameEntry";

const VAULT_QUERY = gql`
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

export const NameList = () => {
    const { data: names } = useExpiryNames();
    const [expiryDates, setExpiryDates] = useState<{ [key: string]: bigint }>(
        {}
    );
    const { address } = useAccount();
    const [selectedNames, setSelectedNames] = useState<string[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    const handleSelect = (name: string) => {
        const newSelectedNames = [...selectedNames];
        const index = newSelectedNames.indexOf(name);

        if (index !== -1) {
            newSelectedNames.splice(index, 1);
        } else {
            newSelectedNames.push(name);
        }

        setSelectedNames(newSelectedNames);
    };

    const handleExpiryUpdate = useCallback((name: string, expiry: bigint) => {
        setExpiryDates((previous) => ({ ...previous, [name]: expiry }));
    }, []);

    const sortedNames =
        names &&
        [...names].sort((a, b) => {
            const expiryA = expiryDates[a.name];
            const expiryB = expiryDates[b.name];

            if (expiryA === undefined && expiryB === undefined) return 0;

            if (expiryA === undefined) return 1;

            if (expiryB === undefined) return -1;

            if (expiryA > expiryB) return 1;

            if (expiryA < expiryB) return -1;

            return 0;
        });

    return (
        <div className="card w-full p-4">
            <div className="flex w-full items-center justify-between">
                <div className="pl-2 font-bold">All Names</div>
                <div className="pl-2 font-thin">
                    {sortedNames?.length ? sortedNames!.length + " vaults" : ""}
                </div>
                {/* <select className="appearance-none bg-background-secondary p-2 rounded-lg " name="filter" id="filter">
                <option value="0">Vault 0</option>
                </select> */}
                <input
                    className="rounded-md bg-background-secondary p-2"
                    type="number"
                    name="vaultFlter"
                    id="vaultFlter"
                    placeholder="Filter by vault..."
                />
                <button
                    disabled={address && selectedNames.length === 0}
                    className={clsx(
                        "btn",
                        selectedNames.length > 0 && "bg-blue-primary"
                    )}
                    onClick={() => setModalOpen(true)}
                >
                    Rescue
                </button>
                {modalOpen && (
                    <RescueModal
                        onClose={() => setModalOpen(false)}
                        labels={[["lucemans"]]}
                        vaults={[0n]}
                    />
                )}
            </div>
            <div className="">
                {sortedNames?.map((name) => (
                    <NameEntry
                        key={name.name + "-#-" + name.vault}
                        name={name.name}
                        onExpiryUpdate={handleExpiryUpdate}
                        selected={selectedNames.includes(name.name)}
                        onSelect={() => handleSelect(name.name)} // Fix: Pass the name property of the name object to handleSelect
                    />
                ))}
            </div>
            {selectedNames.toString()}
        </div>
    );
};
