import { useState } from "react";
import { FiHeart } from "react-icons/fi";

import { NameList } from "./names/NameList";
import { UserProfile } from "./profile/UserProfile";
import { Tab, Tabs } from "./tabs/Tabs";
import { VaultList } from "./vaults/VaultList";

export const App = () => {
    const [tab, setTab] = useState<Tab>("vaults");

    return (
        <div className="relative flex min-h-dvh flex-col items-center gap-4 overflow-hidden bg-background-secondary p-4">
            <div className="flex w-full items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold text-blue-primary">
                        <span>Rescue</span>
                        <span>.</span>
                        <span>Name</span>
                    </h1>
                    <p className="text-sm text-text-secondary">
                        by{" "}
                        <a
                            href="https://github.com/v3xlabs"
                            target="_blank"
                            className="hover:underline"
                            rel="noreferrer"
                        >
                            @v3xlabs
                        </a>
                    </p>
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
                {tab === "names" && <NameList />}
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
