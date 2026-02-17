import { Weapon } from "../weaponTypes";

export const helios_cleaver: Weapon = {
        name: "Helios Cleaver",
        rarity: 4,
        type: "Broadblade",
        description: "Within 12s after Resonance Skill is cast, increases ATK by 3% every 2s, stacking up to 4 time(s). This effect can be triggered 1 time(s) every 12s. When the number of stacks reaches 4, all stacks will be reset within 6s.",
        baseAtk: 412,
        subStat: { label: "ATK", value: "30.3%" },
        image: "/images/weapons/helioscleaver.png"
    };
