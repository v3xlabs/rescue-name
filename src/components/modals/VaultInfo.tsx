import { RESCUE_NAME_ABI } from "abi/abi";
import { formatAddress } from "ens-tools";
import { useExpiry } from "hooks/useExpiry";
import { useVaultBalance } from "hooks/useVaultBalance";
import { useVaultNames } from "hooks/useVaultNames";
import { useVaultOwner } from "hooks/useVaultOwner";
import { FC } from "react";
import { FiPlusCircle, FiTrash } from "react-icons/fi";
import { formatEther } from "viem";
import { useAccount, useChainId, useEnsName, useWriteContract } from "wagmi";

import { CONTRACT_ADDRESS } from "../../constants";
import { Modal } from "./modal";

export const NameExpiryDate: FC<{ name: string }> = ({ name }) => {
    const { data: expiry } = useExpiry(name + ".eth");

    return (
        <span>
            {expiry
                ? "expires in " +
                  Math.floor(
                      (expiry.expiry.date.getTime() - Date.now()) /
                          1000 /
                          60 /
                          60 /
                          24
                  ) +
                  " days"
                : "Unavailable"}
        </span>
    );
};

export const VaultInfo: FC<{ vaultId: bigint; onClose: () => void }> = ({
    vaultId,
    onClose
}) => {
    const chainId = useChainId();
    const { address } = useAccount();
    const { data: owner } = useVaultOwner(vaultId);
    const { data: balance } = useVaultBalance(vaultId);
    const { data: ownerName } = useEnsName({ address: owner });
    const { data: names } = useVaultNames(vaultId);
    const { writeContract } = useWriteContract();

    const isVaultOwner = owner == address;

    return (
        <Modal
            title={`Vault #${vaultId}`}
            dismissOnBgClick
            onCloseRequest={onClose}
        >
            <div className="space-y-2">
                <div className="flex justify-between">
                    <div>Owner</div>
                    <div className="flex items-center gap-1">
                        <div>{ownerName || formatAddress(owner || "")}</div>
                        {isVaultOwner && (
                            <div className="tag-blue tag">You</div>
                        )}
                    </div>
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
                            +0.05 ETH
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center justify-between border-b border-border">
                        <div>Names ({names?.length})</div>
                        <button className="">
                            <FiPlusCircle />
                        </button>
                    </div>
                    <div>
                        {names?.map((name, index) => (
                            <div
                                key={index}
                                className="group flex justify-between"
                            >
                                <div className="flex items-center gap-2">
                                    <div>{name}</div>
                                    <div className="text-text-secondary">
                                        <NameExpiryDate name={name} />
                                    </div>
                                </div>
                                <button className="opacity-0 group-hover:opacity-100">
                                    <FiTrash />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};
