/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, PropsWithChildren } from "react";
import { FiX } from "react-icons/fi";

export const Modal: FC<
    PropsWithChildren<{
        title?: string;
        dismissOnBgClick?: boolean;
        onCloseRequest?: () => void;
    }>
> = ({ children, title, onCloseRequest, dismissOnBgClick = true }) => {
    return (
        <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto">
            <div className="relative min-h-screen min-w-full">
                <div
                    className="bg-background-disabled/25 absolute inset-0 backdrop-blur-sm"
                    onClick={dismissOnBgClick ? onCloseRequest : undefined}
                />
                <div className="flex justify-center px-4 py-12 md:py-32">
                    <div className="card z-10 w-full max-w-96">
                        <div className="flex items-center justify-between p-1">
                            <div className="px-3 py-2 font-bold text-text-primary">
                                {title}
                            </div>
                            <button
                                className="rounded-full p-2 hover:bg-background-disabled"
                                onClick={onCloseRequest}
                            >
                                <FiX />
                            </button>
                        </div>
                        <div className="px-4 pb-4">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
