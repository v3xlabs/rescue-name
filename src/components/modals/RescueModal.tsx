import { RESCUE_NAME_ABI } from "abi/abi";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { sepolia } from "viem/chains";
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
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>({
        defaultValues: { deadline: 15n, reward: 25n },
        reValidateMode: "onChange",
        mode: "onBlur"
    });
    const onSubmit = () => {
        writeContract({
            abi: RESCUE_NAME_ABI,
            address: CONTRACT_ADDRESS[chainId],
            functionName: "execute",
            chain: sepolia,
            args: [vaults, labels]
        });
    };

    const hasError = Object.keys(errors).length > 0;

    const totalNames = labels.reduce(
        (accumulator, current) => accumulator + current.length,
        0
    );
    const price = 99998999999999999999999999999989n;
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
                        console.log("it works")
                        // onSubmit();
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
