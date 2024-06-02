import "tailwindcss/tailwind.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { WagmiProvider } from "wagmi";

import { App } from "./components/App";
import { wagmiConfig } from "./wagmi.config";

// Redirect http to https
if (location.protocol === "http:" && location.hostname !== "localhost") {
    location.replace("https:" + location.href.slice(location.protocol.length));
}

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
