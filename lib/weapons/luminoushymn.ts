import { Weapon } from "../weaponTypes";

export const luminous_hymn: Weapon = {
        name: "Luminous Hymn",
        rarity: 5,
        type: "Rectifier",
        description: "Increase ATK by 12%. Dealing DMG to targets with Spectro Frazzle grants the wielder 14% Basic Attack DMG Bonus and 14% Heavy Attack DMG Bonus, stacking up to 3 times for 6s. Casting Outro Skill Amplifies the Spectro Frazzle DMG on targets around the active Resonator by 30% for 30s. Effects of the same name cannot be stacked.",
        baseAtk: 500,
        subStat: { label: "Crit. Rate", value: "36%" },
        image: "/images/weapons/luminoushymn.png"
    };
