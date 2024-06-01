import { CreateVault } from "components/modals/CreateVault";
import { useState } from "react";
import { useAccount } from "wagmi";

export const VaultList = () => {
    // const { data: myVaults, isLoading } = useMyVaults();
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
                {/* {isLoading && (
                    <div>
                        <FiLoader />
                    </div>
                )}
                {!isLoading && myVaults && myVaults.length === 0 && (
                    <div>No vaults found</div>
                )}
                {!isLoading && myVaults && myVaults.length > 0 && (
                    <div>
                        {myVaults.map((vault) => (
                            <VaultEntry key={vault.address} vault={vault} />
                        ))}
                    </div>
                )} */}
            </div>
        </div>
    );
};
