/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, PropsWithChildren } from "react";

export const Modal: FC<
    PropsWithChildren<{
        dismissOnBgClick?: boolean;
        onCloseRequest?: () => void;
    }>
> = ({ children, onCloseRequest, dismissOnBgClick = true }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="relative">
                <div
                    className="bg-background-disabled/25 absolute inset-0 overflow-y-auto backdrop-blur-sm"
                    onClick={dismissOnBgClick ? onCloseRequest : undefined}
                />
                <div className="flex justify-center px-4 py-12 md:py-32">
                    <div className="card z-10 w-full max-w-96 p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
