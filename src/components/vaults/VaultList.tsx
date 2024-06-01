import { CreateVault } from "components/modals/CreateVault";
import { useLastVaultId } from "hooks/useLastVaultId";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { useAccount } from "wagmi";

import { VaultEntry } from "./VaultEntry";

export const VaultList = () => {
    // const { data: myVaults, isLoading } = useMyVaults();
    const { data: lastVaultId, isLoading } = useLastVaultId();
    const { address } = useAccount();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="card flex h-fit flex-col gap-4 p-4">
            <div className="flex w-full items-center justify-between">
                <div className="pl-2 font-bold">Vaults</div>
                {address && (
                    <button className="btn" onClick={() => setModalOpen(true)}>
                        Create
                    </button>
                )}
                {modalOpen && (
                    <CreateVault onClose={() => setModalOpen(false)} />
                )}
            </div>
            <div>
                {isLoading && (
                    <div>
                        <FiLoader />
                    </div>
                )}
                {!isLoading && lastVaultId === 0n && <div>No vaults found</div>}
                {!isLoading && lastVaultId! > 0n && (
                    <div>
                        {
                            // Iterate from 0 to lastVaultId
                            Array.from({ length: Number(lastVaultId) }).map(
                                (_, index) => (
                                    <VaultEntry
                                        key={index}
                                        vault={BigInt(index)}
                                    />
                                )
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    );
};
