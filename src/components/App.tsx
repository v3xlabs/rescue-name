import { FiHeart } from "react-icons/fi";

export const App = () => {
    return (
        <div className="relative flex min-h-dvh flex-col items-center gap-4 overflow-hidden bg-background-secondary p-4">
            <div className="w-full bg-background-primary">luc.eth</div>
            <div className="h-fit rounded-xl border-border bg-background-primary p-4">
                hi
            </div>
            <div className="flex items-center justify-center gap-2">
                Built with <FiHeart /> by ur mom
            </div>
        </div>
    );
};
