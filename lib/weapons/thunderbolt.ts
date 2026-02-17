import { Weapon } from "../weaponTypes";

export const thunderbolt: Weapon = {
        name: "Thunderbolt",
        rarity: 4,
        type: "Pistols",
        description: "When hitting a target with Basic Attacks or Heavy Attacks, increases Resonance Skill DMG Bonus by 7%, stacking up to 3 time(s). This effect lasts for 10s and can be triggered 1 time(s) every 1s.",
        baseAtk: 387,
        subStat: { label: "ATK", value: "36.4%" },
        image: "/images/weapons/thunderbolt.png"
    };
