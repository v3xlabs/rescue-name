import { ChainSelector } from "components/chains/ChainSelector";
import { formatAddress } from "ens-tools";
import { FiExternalLink } from "react-icons/fi";
import {
    useAccount,
    useConnect,
    useConnectors,
    useDisconnect,
    useEnsAvatar,
    useEnsName
} from "wagmi";
import { injected } from "wagmi/connectors";

const embedConnector = injected();

export const UserProfile = () => {
    const { address } = useAccount();
    const { data: name } = useEnsName({ address });
    const { data: avatar } = useEnsAvatar({ name: name || "" });
    const { disconnect } = useDisconnect();
    const { connect } = useConnect();
    const connectors = useConnectors();

    if (connectors.length === 0) {
        return;
    }

    if (!address) {
        return (
            <button
                className="btn"
                onClick={() => connect({ connector: embedConnector })}
            >
                Connect ({connectors.map((c) => c.name).join(", ")})
            </button>
        );
    }

    return (
        <div className="flex items-center gap-1">
            <ChainSelector />
            <div className="group relative">
                <button className="relative z-10 flex h-10 min-w-32 justify-center gap-1 rounded-xl border border-border bg-background-primary px-4 py-2 pl-3 leading-snug">
                    {avatar && (
                        <div className="aspect-square h-full overflow-hidden rounded-full">
                            <img src={avatar} alt={name || undefined} />
                        </div>
                    )}
                    <div className="flex-col justify-center pl-1">
                        <div>{name || formatAddress(address)}</div>
                        {/* {name && (
                        <div className="text-sm text-text-secondary">
                        {formatAddress(address)}
                        </div>
                    )} */}
                    </div>
                </button>
                <div className="absolute inset-x-0 -mt-2 hidden flex-col items-center text-nowrap rounded-b-lg border border-border bg-background-primary pt-2 group-hover:flex">
                    {name && (
                        <a
                            href={`https://ens.app/${name}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex w-full items-center gap-1 px-2 py-1 text-center hover:bg-blue-surface"
                        >
                            view profile <FiExternalLink className="text-sm" />
                        </a>
                    )}
                    <button
                        className="w-full px-2 py-1 hover:bg-red-surface"
                        onClick={() => disconnect()}
                    >
                        disconnect
                    </button>
                </div>
            </div>
        </div>
    );
};
