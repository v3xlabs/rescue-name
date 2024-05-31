import { formatAddress } from "ens-tools";
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName
} from "wagmi";
import { injected } from "wagmi/connectors";

const embedConnector = injected();

export const UserProfile = () => {
    const { address } = useAccount();
    const { data: name } = useEnsName({ address });
    const { data: avatar } = useEnsAvatar({ name: "luc.eth" });
    const { disconnect } = useDisconnect();
    const { connect } = useConnect();

    if (!address) {
        return (
            <button
                className="btn"
                onClick={() => connect({ connector: embedConnector })}
            >
                Connect
            </button>
        );
    }

    return (
        <div className="group relative">
            <button className="relative z-10 flex h-10 justify-center rounded-xl border border-border bg-background-primary px-4 py-2 leading-snug">
                {avatar && (
                    <div className="aspect-square h-full overflow-hidden rounded-full">
                        <img src={avatar} alt={name || undefined} />
                    </div>
                )}
                <div className="flex-col justify-center">
                    <div>{name || formatAddress(address)}</div>
                    {name && (
                        <div className="text-sm text-text-secondary">
                            {formatAddress(address)}
                        </div>
                    )}
                </div>
            </button>
            <div className="absolute inset-x-0 -mt-2 hidden flex-col items-center rounded-b-lg border border-border bg-background-primary pt-2 group-hover:flex">
                <button className="px-2" onClick={() => disconnect()}>
                    disconnect
                </button>
            </div>
        </div>
    );
};
