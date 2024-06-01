import { FC, PropsWithChildren } from "react";

export const Modal: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="bg-background-disabled/25 fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
            <div className="flex justify-center px-4 py-12 md:py-32">
                <div className="card w-full max-w-96 p-4">{children}</div>
            </div>
        </div>
    );
};
