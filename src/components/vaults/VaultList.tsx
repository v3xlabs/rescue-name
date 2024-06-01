import { useMyVaults } from "hooks/useMyVaults";
import { FiLoader } from "react-icons/fi";
import { useAccount } from "wagmi";

import { VaultEntry } from "./VaultEntry";

export const VaultList = () => {
    const { data: myVaults, isLoading } = useMyVaults();
    const { address } = useAccount();

    return (
        <div className="card flex h-fit flex-col gap-4 p-4">
            <div className="flex w-full items-center justify-between">
                <div className="pl-2 font-bold">Vaults</div>
                {address && <button className="btn">Create</button>}
            </div>
            <div>
                {isLoading && (
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
                )}
            </div>
        </div>
    );
};