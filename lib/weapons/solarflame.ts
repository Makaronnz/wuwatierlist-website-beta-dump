import { Weapon } from "../weaponTypes";

export const solar_flame: Weapon = {
        name: "Solar Flame",
        rarity: 4,
        type: "Pistols",
        description: "Dealing Basic Attack or Heavy Attack DMG increases ATK by 2.2% and grants 2.2% Heavy Attack DMG Bonus for 7s, stacking up to 4 times. This effect can be triggered 1 time every 1s.",
        baseAtk: 412,
        subStat: { label: "CRIT Rate", value: "20.3%" },
        image: "/images/weapons/solarflame.png"
    };
