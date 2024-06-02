import { RESCUE_NAME_ABI } from "abi/abi";
import { FC } from "react";
import { FiCheck } from "react-icons/fi";
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
    const recipient = address!;

    return (
        <Modal onCloseRequest={onClose} title="Rescue Names">
            <div className="w-full space-y-2">
                <div className="border-b border-b-border pb-4">
                    <p>
                        You are rescuing {totalNames} names from {vaults.length}{" "}
                        vaults
                    </p>
                </div>
                <div className="space-y-2 py-2">
                    {vaults.map((vault, index) => (
                        <div
                            key={vault}
                            className="rounded-md border border-border p-2"
                        >
                            <p>#{vault.toString()}</p>
                            <div className="flex w-full justify-end">
                                <ul>
                                    {labels[index].map((label) => (
                                        <li key={label}>{label}.eth</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-1 w-full border-t border-t-border"></div>
                <div className="w-full">
                    <div className="flex w-full justify-between">
                        <div className="font-bold">Transaction Cost</div>
                        <div>0.03 ETH</div>
                        {/* Hardcoded until gas estimates are done */}
                    </div>
                    <div className="italic">TODO: Gas Estimate</div>
                    <div className="flex w-full justify-between">
                        <div className="font-bold">Net Profit</div>
                        <div>0.01 ETH</div>
                        {/* Hardcoded until gas estimates are done */}
                    </div>
                    <div className="flex w-full items-center justify-end gap-1 text-end text-green-primary">
                        Profitable <FiCheck />
                    </div>
                </div>
                <button
                    className="btn w-full"
                    onClick={() => {
                        writeContract({
                            abi: RESCUE_NAME_ABI,
                            address: CONTRACT_ADDRESS[chainId],
                            functionName: "execute",
                            args: [vaults, labels, recipient]
                        });
                    }}
                >
                    Rescue {totalNames} Names
                </button>
            </div>
        </Modal>
    );
};
