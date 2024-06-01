/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { VaultInfo } from "components/modals/VaultInfo";
import { formatAddress } from "ens-tools";
import { useVaultBalance } from "hooks/useVaultBalance";
import { useVaultOwner } from "hooks/useVaultOwner";
import { FC, useState } from "react";
import { formatEther } from "viem";
import { useEnsName } from "wagmi";

export const VaultEntry: FC<{ vault: bigint }> = ({ vault }) => {
    const { data: owner } = useVaultOwner(vault);
    const { data: name } = useEnsName({ address: owner });
    const { data: balance } = useVaultBalance(vault);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex justify-between border-b border-border p-2"
                onClick={() => setIsOpen(true)}
            >
                <div>
                    <div>#{vault.toString()}</div>
                    <div className="text-text-secondary">
                        {name || formatAddress(owner || "")}
                    </div>
                </div>
                <div>
                    {/* <div>{vault.name_count} names</div> */}
                    <div>{formatEther(balance || 0n)} ETH</div>
                </div>
            </div>
            {isOpen && (
                <VaultInfo vaultId={vault} onClose={() => setIsOpen(false)} />
            )}
        </div>
    );
};
