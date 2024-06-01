import useSWR from "swr";

export const useExpiryNames = () => {
    return useSWR("/my/names", async (): Promise<string[]> => {
        // TODO: Placeholder
        const names = await fetch("./names.json");

        // eslint-disable-next-line unicorn/no-await-expression-member
        const names2 = (await names.json())["names"];

        return names2.filter((name: string) => name.length >= 5 + 4);
    });
};
