import { FiHeart } from "react-icons/fi";

import { UserProfile } from "./profile/UserProfile";

export const App = () => {
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
            <div className="max-w flex w-full flex-col gap-4">
                <div className="flex h-fit flex-col gap-4 rounded-xl border-border bg-background-primary p-4">
                    <p>
                        Create your own vault 📦, supply a list of names, set a
                        &quot;deadline&quot;, top up with ETH, and let the magic
                        🪄 happen.
                    </p>
                    <p>
                        Anyone can renew your names (and cover the gas), and in
                        exchange, they get a tiny kickback ✨
                    </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    Built with <FiHeart /> by{" "}
                    <a href="https://v3x.company" className="link">
                        @v3xlabs
                    </a>
                </div>
            </div>
        </div>
    );
};
