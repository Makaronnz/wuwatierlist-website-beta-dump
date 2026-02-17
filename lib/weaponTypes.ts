export interface Weapon {
    name: string;
    rarity: 1 | 2 | 3 | 4 | 5;
    type: "Sword" | "Broadblade" | "Gauntlets" | "Pistols" | "Rectifier";
    description: string;
    baseAtk: number;
    subStat: {
        label: string;
        value: string;
    };
    image: string;
}
