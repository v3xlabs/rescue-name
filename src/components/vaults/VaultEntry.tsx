/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { VaultInfo } from "components/modals/VaultInfo";
import { formatAddress } from "ens-tools";
import { useVaultBalance } from "hooks/useVaultBalance";
import { useVaultNames } from "hooks/useVaultNames";
import { useVaultOwner } from "hooks/useVaultOwner";
import { FC, useState } from "react";
import { formatEther } from "viem";
import { useAccount, useEnsName } from "wagmi";

export const VaultEntry: FC<{ vault: bigint }> = ({ vault }) => {
    const { address } = useAccount();
    const { data: owner } = useVaultOwner(vault);
    const { data: name } = useEnsName({ address: owner });
    const { data: balance } = useVaultBalance(vault);
    const { data: names } = useVaultNames(vault);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex justify-between border-b border-border p-2 hover:cursor-pointer hover:bg-background-secondary"
                onClick={() => setIsOpen(true)}
            >
                <div>
                    <div>#{vault.toString()}</div>
                    <div className="flex items-center gap-1">
                        <div className="text-text-secondary">
                            {name || formatAddress(owner || "")}
                        </div>
                        {owner == address && (
                            <div className="tag-blue tag">You</div>
                        )}
                    </div>
                </div>
                <div className="text-right">
                    <div>{names?.length} names</div>
                    <div>{formatEther(balance || 0n)} ETH</div>
                </div>
            </div>
            {isOpen && (
                <VaultInfo vaultId={vault} onClose={() => setIsOpen(false)} />
            )}
        </div>
    );
};
