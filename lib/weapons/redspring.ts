import { Weapon } from "../weaponTypes";

export const red_spring: Weapon = {
        name: "Red Spring",
        rarity: 5,
        type: "Sword",
        description: "Increase ATK by 12%. When dealing Basic Attack DMG, the wielder gains 10% Basic Attack DMG Bonus for 14s. This effect can be triggered once per second, stacking up to 3 times. When the wielder's Concerto Energy is consumed, gain 40% Basic DMG Bonus for 10s. This effect can be triggered once per second and ends when the wielder is switched off the field.",
        baseAtk: 587,
        subStat: { label: "CRIT Rate", value: "24.3%" },
        image: "/images/weapons/redspring.png"
    };
