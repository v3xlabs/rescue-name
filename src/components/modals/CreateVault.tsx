import { RESCUE_NAME_ABI } from "abi/abi";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { sepolia } from "viem/chains";
import { useAccount, useChainId, useWriteContract } from "wagmi";

import { CONTRACT_ADDRESS } from "../../constants";
import { Modal } from "./modal";

type Inputs = {
    deadline: bigint;
    reward: bigint;
};

export const CreateVault: FC<{ onClose: () => void }> = ({ onClose }) => {
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
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);

        writeContract({
            abi: RESCUE_NAME_ABI,
            address: CONTRACT_ADDRESS[chainId],
            functionName: "createVault",
            chain: sepolia,
            args: [data.deadline, data.reward]
        });
    };

    const hasError = Object.keys(errors).length > 0;

    return (
        <Modal onCloseRequest={onClose} title="Create Vault">
            <div className="w-full space-y-2">
                <p>
                    Simply create your vault, top it up (send ETH), and add
                    names to it (later step).
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full space-y-4">
                        <div className="w-full">
                            <label
                                htmlFor="deadline"
                                className="text-text-secondary"
                            >
                                Deadline (in days, default is 15):
                            </label>
                            <input
                                defaultValue="15"
                                className="input w-full"
                                {...register("deadline", { required: true })}
                            />
                            {errors.deadline && (
                                <span>{errors.deadline.message}</span>
                            )}
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="reward"
                                className="text-text-secondary"
                            >
                                Reward (% out of 100, default is 25%):
                            </label>
                            <input
                                defaultValue="25"
                                className="input w-full"
                                {...register("reward", { required: true })}
                            />
                            {errors.reward && (
                                <span>{errors.reward.message}</span>
                            )}
                        </div>

                        <input
                            type="submit"
                            className="btn w-full"
                            disabled={hasError}
                        />
                    </div>
                </form>
            </div>
        </Modal>
    );
};
