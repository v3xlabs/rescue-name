import clsx from "clsx";
import { FC } from "react";

export const TABS = ["vaults", "names"];
export type Tab = (typeof TABS)[number];

export const Tabs: FC<{ activeTab: Tab; onTabChange: (tab: Tab) => void }> = ({
    activeTab,
    onTabChange
}) => {
    return (
        <div className="flex gap-2 px-4">
            {TABS.map((tab) => (
                <button
                    className={clsx(
                        "px-2 font-bold",
                        activeTab == tab
                            ? "text-text-primary"
                            : "text-text-secondary"
                    )}
                    key={tab}
                    onClick={() => onTabChange(tab as Tab)}
                >
                    {tab[0].toUpperCase() + tab.slice(1)}
                </button>
            ))}
        </div>
    );
};
