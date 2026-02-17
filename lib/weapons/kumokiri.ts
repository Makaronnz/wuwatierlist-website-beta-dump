import { Weapon } from "../weaponTypes";

export const kumokiri: Weapon = {
        name: "Kumokiri",
        rarity: 5,
        type: "Broadblade",
        description: "ATK is increased by 12%. When the wielder casts Intro Skill or inflicts Negative Statuses, they gain 8% Resonance Liberation DMG Bonus, stacking up to 3 times for 15s. At max stacks, when Resonators in the team inflict Negative Statuses, they gain 24% All-Attribute DMG Bonus for 15s. Effects of the same name cannot be stacked.",
        baseAtk: 500,
        subStat: { label: "CRIT Rate", value: "36%" },
        image: "/images/weapons/kumokiri.png"
    };
