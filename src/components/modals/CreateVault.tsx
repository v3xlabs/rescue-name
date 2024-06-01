import { RESCUE_NAME_ABI } from "abi/abi";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { sepolia } from "viem/chains";
import { useAccount, useChainId, useWriteContract } from "wagmi";

import { CONTRACT_ADDRESS } from "../../constants";
import { Modal } from "./modal";

type Inputs = {
    deadline: number;
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
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);

        const deadline = 15n;
        const reward = 25n;

        writeContract({
            abi: RESCUE_NAME_ABI,
            address: CONTRACT_ADDRESS[chainId],
            functionName: "createVault",
            chain: sepolia,
            args: [deadline, reward]
        });
    };

    console.log(watch("deadline"));

    return (
        <Modal onCloseRequest={onClose} title="Create Vault">
            <p>
                Simply create your vault, top it up (send ETH), and add names to
                it (later step).
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="deadline">
                    Deadline (in days, default is 15):
                </label>
                <input
                    defaultValue="15"
                    {...register("deadline", { required: true })}
                />
                {errors.deadline && <span>{errors.deadline.message}</span>}

                <input type="submit" className="btn w-full" />
            </form>
        </Modal>
    );
};
