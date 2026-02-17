import { Weapon } from "../weaponTypes";

export const radiance_cleaver: Weapon = {
        name: "Radiance Cleaver",
        rarity: 5,
        type: "Broadblade",
        description: "Increases ATK by 12%. Dealing damage to targets under Tune Strain: Interfered grants 24% Resonance Liberation Bonus for 3s. Retriggering the effect resets its duration.",
        baseAtk: 587,
        subStat: { label: "CRIT DMG", value: "48.6%" },
        image: "/images/weapons/radiancecleaver.png"
    };
