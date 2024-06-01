import { formatAddress } from "ens-tools";
import { FC } from "react";
import { Vault } from "types/vault";
import { useEnsName } from "wagmi";

export const VaultEntry: FC<{ vault: Vault }> = ({ vault }) => {
    const { data: name } = useEnsName({ address: vault.owner as "0x{string}" });

    return (
        <div className="flex justify-between border-b border-border p-2">
            <div>
                <div>{formatAddress(vault.address)}</div>
                <div>{name || formatAddress(vault.owner)}</div>
            </div>
            <div>
                <div>{vault.name_count} names</div>
                <div>{vault.balance} ETH</div>
            </div>
        </div>
    );
};
