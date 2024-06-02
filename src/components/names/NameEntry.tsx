// @ts-nocheck
import clsx from "clsx";
import { useExpiry } from "hooks/useExpiry";
import React, { useEffect } from "react";

import { formatDate } from "../../utils";

export const NameEntry: React.FC<{
    name: string;
    onExpiryUpdate: (name: string, expiry: bigint) => void;
    selected: boolean;
    onSelect: () => void;
}> = ({ name, onExpiryUpdate, selected, onSelect }) => {
    // const [selected, setSelected] = useState(false);
    const { data: expiry, error } = useExpiry(name);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (expiry?.expiry.value) {
            onExpiryUpdate(name, expiry!.expiry.value);
        }
    }, [expiry, name, onExpiryUpdate]);

    const handleClick = () => {
        onSelect();
        // onSelect();
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
                        <div className="font-semibold">{name}</div>
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
