// @ts-nocheck
import clsx from "clsx";
import { useExpiry } from "hooks/useExpiry";
import React, { useEffect, useState } from "react";

import { formatDate } from "../../utils";

interface NameEntryProperties {
    name: string;
}

export const NameEntry: React.FC<NameEntryProperties> = (properties) => {
    const [selected, setSelected] = useState(false);
    const { data: expiry, error } = useExpiry(properties.name);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (expiry?.expiry.value) {
            properties.onExpiryUpdate(name, expiry!.expiry.value);
        }
    }, [expiry, name, properties.onExpiryUpdate]);

    const handleClick = () => {
        setSelected(!selected);
        properties.onSelect();
    };

    return (
        <button
            className={clsx(
                "card my-2 flex w-full flex-col gap-2 p-4 pt-0",
                selected && "bg-background-disabled"
            )}
            onClick={handleClick}
        >
            <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <div className="font-semibold">{properties.name}</div>
                        <div className="text-xs font-medium">Vault: 0</div>
                    </div>
                    <div>
                        {expiry
                            ? formatDate(expiry.expiry.date.toString())
                            : ""}
                    </div>
                </div>
            </div>
        </button>
    );
};
