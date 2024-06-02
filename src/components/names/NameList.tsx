import clsx from "clsx";
import { RescueModal } from "components/modals/RescueModal";
import { useExpiryNames } from "hooks/useExpiryNames";
import { useCallback, useState } from "react";
import { useAccount } from "wagmi";

import { NameEntry } from "./NameEntry";

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

    // Merge entries by name, so all "lucemans" entries should combine and vaultId becomes vaults[]
    const mergedNames = names?.reduce(
        (accumulator, name) => {
            if (!accumulator[name.name]) {
                accumulator[name.name] = [];
            }

            accumulator[name.name].push(BigInt(name.vault));

            return accumulator;
        },
        {} as { [key: string]: bigint[] }
    );

    const sortedNames =
        mergedNames &&
        [...Object.keys(mergedNames)].sort((a, b) => {
            const expiryA = expiryDates[a];
            const expiryB = expiryDates[b];

            if (expiryA === undefined && expiryB === undefined) return 0;

            if (expiryA === undefined) return 1;

            if (expiryB === undefined) return -1;

            if (expiryA > expiryB) return 1;

            if (expiryA < expiryB) return -1;

            return 0;
        });

    const selectedNamesByVault = selectedNames.reduce(
        (accumulator, name) => {
            const vaults = mergedNames![name];

            const vaultId = vaults[0].toString();

            if (!accumulator[vaultId]) {
                accumulator[vaultId] = [];
            }

            accumulator[vaultId].push(name);

            return accumulator;
        },
        {} as { [key: string]: string[] }
    );

    const selectedVaults = Object.keys(selectedNamesByVault);

    return (
        <div className="card w-full p-4">
            <div className="flex w-full items-center justify-between">
                <div className="pl-2 font-bold">All Names</div>
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
                        vaults={selectedVaults.map((vault) => BigInt(vault))}
                        labels={selectedVaults.map(
                            (vault) => selectedNamesByVault[vault]
                        )}
                    />
                )}
            </div>
            <div className="">
                {sortedNames?.map((name) => (
                    <NameEntry
                        key={name}
                        name={name}
                        vaults={mergedNames![name]}
                        onExpiryUpdate={handleExpiryUpdate}
                        selected={selectedNames.includes(name)}
                        onSelect={() => handleSelect(name)}
                    />
                ))}
            </div>
        </div>
    );
};
