import { useState } from "react";
import { FiHeart } from "react-icons/fi";

import { UserProfile } from "./profile/UserProfile";
import { Tab, Tabs } from "./tabs/Tabs";
import { VaultList } from "./vaults/VaultList";

export const App = () => {
    const [tab, setTab] = useState<Tab>("vaults");

    return (
        <div className="relative flex min-h-dvh flex-col items-center gap-4 overflow-hidden bg-background-secondary p-4">
            <div className="flex w-full items-center justify-between">
                <div>
                    <h1>Rescue Name</h1>
                </div>
                <div>
                    <UserProfile />
                </div>
            </div>
            <div className="max-w flex w-full flex-col gap-2">
                <Tabs activeTab={tab} onTabChange={setTab} />
                {tab === "vaults" && (
                    <div className="card flex h-fit flex-col gap-4 p-4">
                        <p>
                            Create your own vault 📦, supply a list of names,
                            set a &quot;deadline&quot;, top up with ETH, and let
                            the magic 🪄 happen.
                        </p>
                        <p>
                            Anyone can renew your names (and cover the gas), and
                            in exchange, they get a tiny kickback ✨
                        </p>
                    </div>
                )}
                {tab === "vaults" && <VaultList />}
                <div className="flex items-center justify-center gap-2">
                    Built with <FiHeart /> by{" "}
                    <a
                        href="https://v3x.company"
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @v3xlabs
                    </a>
                </div>
            </div>
        </div>
    );
};
