import { formatAddress } from "ens-tools";
import { useVaultBalance } from "hooks/useVaultBalance";
import { useVaultOwner } from "hooks/useVaultOwner";
import { FC } from "react";
import { useEnsName } from "wagmi";

import { Modal } from "./modal";

export const VaultInfo: FC<{ vaultId: bigint; onClose: () => void }> = ({
    vaultId,
    onClose
}) => {
    const { data: owner } = useVaultOwner(vaultId);
    const { data: balance } = useVaultBalance(vaultId);
    const { data: ownerName } = useEnsName({ address: owner });

    return (
        <Modal
            title={`Vault ${vaultId}`}
            dismissOnBgClick
            onCloseRequest={onClose}
        >
            <div>
                <div>Owner</div>
                <div>{ownerName || formatAddress(owner || "")}</div>
            </div>
            <div>
                <div>Balance</div>
                <div>{balance?.toString()}</div>
                <button className="btn">Topup</button>
            </div>
        </Modal>
    );
};
