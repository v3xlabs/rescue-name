import { useExpiry } from "hooks/useExpiry";
import { FC, useEffect } from "react";

export const NameEntry: FC<{
    name: string;
    onExpiryUpdate: (name: string, expiry: bigint) => void;
}> = ({ name, onExpiryUpdate }) => {
    const { data: expiry, error } = useExpiry(name);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (expiry?.expiry.value) {
            onExpiryUpdate(name, expiry!.expiry.value);
        }
    }, [expiry, name, onExpiryUpdate]);

    return (
        <div className="flex w-full items-center justify-between">
            <div>{name}</div>
            <div>
                {expiry && <div>{JSON.stringify(expiry.expiry.date)}</div>}
                {error && <div>{error.message}</div>}
            </div>
        </div>
    );
};
