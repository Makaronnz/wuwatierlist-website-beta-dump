import { Weapon } from "../weaponTypes";

export const fables_of_wisdom: Weapon = {
        name: "Fables of Wisdom",
        rarity: 4,
        type: "Sword",
        description: "Dealing DMG to enemies with Negative Statuses increases the wielder's ATK by 4% for 10s. This effect can be triggered 1 time per second, stackable up to 4 times.",
        baseAtk: 462,
        subStat: { label: "ATK", value: "18.2%" },
        image: "/images/weapons/fablesofwisdom.png"
    };
