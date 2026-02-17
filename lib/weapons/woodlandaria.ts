import { Weapon } from "../weaponTypes";

export const woodland_aria: Weapon = {
        name: "Woodland Aria",
        rarity: 5,
        type: "Pistols",
        description: "ATK is increased by 12%. Inflicting Aero Erosion on the target gives 24% Aero DMG Bonus for 10s. Hitting targets with Aero Erosion reduces their Aero RES by 10% for 20s. Effects of the same name cannot be stacked.",
        baseAtk: 500,
        subStat: { label: "CRIT Rate", value: "36%" },
        image: "/images/weapons/woodlandaria.png"
    };
