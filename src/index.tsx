import "tailwindcss/tailwind.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { WagmiProvider } from "wagmi";

import { App } from "./components/App";
import { wagmiConfig } from "./wagmi.config";

const container = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
    <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </WagmiProvider>
);
