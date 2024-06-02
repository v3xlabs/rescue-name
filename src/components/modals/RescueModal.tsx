import { RESCUE_NAME_ABI } from "abi/abi";
import { FC } from "react";
import { useAccount, useChainId, useWriteContract } from "wagmi";

import { CONTRACT_ADDRESS } from "../../constants";
import { Modal } from "./modal";

export const RescueModal: FC<{
    onClose: () => void;
    vaults: bigint[];
    labels: string[][];
}> = ({ onClose, vaults, labels }) => {
    const { address } = useAccount();
    const chainId = useChainId();
    const { writeContract } = useWriteContract();

    const totalNames = labels.reduce(
        (accumulator, current) => accumulator + current.length,
        0
    );
    const price = 0n;
    const recipient = address!;

    return (
        <Modal onCloseRequest={onClose} title="Rescue Names">
            <div className="w-full space-y-2">
                <p>You are rescuing {totalNames} names</p>
                <div>
                    {vaults.map((vault, index) => (
                        <div key={vault}>
                            <p>Vault: #{vault.toString()}</p>
                            <ul>
                                {labels[index].map((label) => (
                                    <li key={label}>{label}.eth</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="h-1 w-full border-t border-t-border"></div>
                <div>TODO: Gas Summary</div>
                <button
                    className="btn w-full"
                    onClick={() => {
                        writeContract({
                            abi: RESCUE_NAME_ABI,
                            address: CONTRACT_ADDRESS[chainId],
                            functionName: "execute",
                            args: [vaults, labels, price, recipient]
                        });
                    }}
                >
                    Rescue {totalNames} Names
                </button>
            </div>
        </Modal>
    );
};
