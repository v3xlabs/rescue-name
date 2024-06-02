import clsx from "clsx";
import { useExpiry } from "hooks/useExpiry";
import React, { useEffect } from "react";

import { formatDate } from "../../utils";

export const NameEntry: React.FC<{
    name: string;
    onExpiryUpdate: (name: string, expiry: bigint) => void;
    selected: boolean;
    onSelect: () => void;
    vaults: bigint[];
}> = ({ name, onExpiryUpdate, selected, onSelect, vaults }) => {
    // const [selected, setSelected] = useState(false);
    const { data: expiry, error } = useExpiry(name);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (expiry?.expiry.value) {
            onExpiryUpdate(name, expiry!.expiry.value);
        }
    }, [expiry, name, onExpiryUpdate]);

    return (
        <button
            className={clsx(
                "card my-2 flex w-full flex-col gap-2 p-4",
                selected && "bg-background-disabled"
            )}
            onClick={onSelect}
        >
            <div className="flex w-full flex-col">
                <div className="flex flex-col items-start">
                    <div className="font-bold">
                        {name}
                        <span className="text-text-secondary">.eth</span>
                    </div>
                    <div className="text-xs font-medium">
                        Vault: {vaults.map((vault) => "#" + vault).join(", ")}
                    </div>
                </div>
                <div>
                    {expiry ? formatDate(expiry.expiry.date.toString()) : ""}
                </div>
            </div>
        </button>
    );
};
