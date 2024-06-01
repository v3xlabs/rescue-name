import { useExpiryNames } from "hooks/useExpiryNames";
import { useCallback, useState } from "react";

import { NameEntry } from "./NameEntry";

export const NameList = () => {
    const { data: names } = useExpiryNames();
    const [expiryDates, setExpiryDates] = useState<{ [key: string]: bigint }>(
        {}
    );

    const handleExpiryUpdate = useCallback((name: string, expiry: bigint) => {
        setExpiryDates((previous) => ({ ...previous, [name]: expiry }));
    }, []);

    const sortedNames =
        names &&
        [...names].sort((a, b) => {
            const expiryA = expiryDates[a];
            const expiryB = expiryDates[b];

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
                {/* {address && <button className="btn">Create</button>} */}
            </div>
            <div>
                {sortedNames?.map((name) => (
                    <NameEntry
                        key={name}
                        name={name}
                        onExpiryUpdate={handleExpiryUpdate}
                    />
                ))}
            </div>
        </div>
    );
};
