import { RESCUE_NAME_ABI } from "abi/abi";
import { formatAddress } from "ens-tools";
import { useVaultBalance } from "hooks/useVaultBalance";
import { useVaultOwner } from "hooks/useVaultOwner";
import { FC } from "react";
import { formatEther } from "viem";
import { useChainId, useEnsName, useWriteContract } from "wagmi";

import { CONTRACT_ADDRESS } from "../../constants";
import { Modal } from "./modal";

export const VaultInfo: FC<{ vaultId: bigint; onClose: () => void }> = ({
    vaultId,
    onClose
}) => {
    const chainId = useChainId();
    const { data: owner } = useVaultOwner(vaultId);
    const { data: balance } = useVaultBalance(vaultId);
    const { data: ownerName } = useEnsName({ address: owner });
    const { writeContract } = useWriteContract();

    return (
        <Modal
            title={`Vault ${vaultId}`}
            dismissOnBgClick
            onCloseRequest={onClose}
        >
            <div className="flex justify-between">
                <div>Owner</div>
                <div>{ownerName || formatAddress(owner || "")}</div>
            </div>
            <div className="flex justify-between">
                <div>Balance</div>
                <div className="flex items-center gap-2">
                    <div>{formatEther(balance || 0n)} ETH</div>
                    <button
                        className="btn"
                        onClick={() => {
                            writeContract({
                                abi: RESCUE_NAME_ABI,
                                address: CONTRACT_ADDRESS[chainId],
                                functionName: "topupVault",
                                args: [vaultId],
                                value: BigInt(0.05e18)
                            });
                        }}
                    >
                        Topup
                    </button>
                </div>
            </div>
        </Modal>
    );
};
