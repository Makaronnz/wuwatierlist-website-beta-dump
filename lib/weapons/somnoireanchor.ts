import { Weapon } from "../weaponTypes";

export const somnoire_anchor: Weapon = {
        name: "Somnoire Anchor",
        rarity: 4,
        type: "Sword",
        description: "Gain 1 stack of Hiss when dealing damage to the target, with 1 stack generated every 1s. Hiss: each stack increases the wielder's ATK by 2% for 3s, stacking up to 10 times. Switching off the wielder clears all stacks. Gaining 10 stacks increases the wielder's Crit. Rate by 6%.",
        baseAtk: 462,
        subStat: { label: "ATK", value: "18.2%" },
        image: "/images/weapons/somnoireanchor.png"
    };
