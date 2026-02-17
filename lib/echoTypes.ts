export interface Echo {
    name: string;
    class: "Calamity" | "Overlord" | "Elite" | "Common";
    cost: 4 | 3 | 1;
    description: string;
    sets: string[];
    image: string;
}
