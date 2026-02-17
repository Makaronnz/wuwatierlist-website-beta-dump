
import React from 'react';
import { characters } from '@/lib/characters';
import CharacterGuide from '@/components/CharacterGuide';
import Link from 'next/link';

// Dynamically generate routes (optional but good for static export)
export async function generateStaticParams() {
    return characters.map((char) => ({
        id: char.id,
    }));
}

// Page component
export default async function CharacterPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const character = characters.find((c) => c.id === id);

    if (!character) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                <h1 className="text-3xl font-bold">Character Not Found</h1>
                <Link href="/" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen p-4 md:p-8">
            {/* Back Buttons */}
            {/* Back Buttons Removed (Moved to Component) */}

            <CharacterGuide character={character} />
        </main>
    );
}
