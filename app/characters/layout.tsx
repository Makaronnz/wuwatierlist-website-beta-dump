import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resonators Archive | Wuthering Waves Characters",
    description: "Browse all Wuthering Waves Resonators. Filter by element, weapon type, and rarity. Complete character database and guides.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
