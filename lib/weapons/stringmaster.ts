import { Weapon } from "../weaponTypes";

export const stringmaster: Weapon = {
        name: "Stringmaster",
        rarity: 5,
        type: "Rectifier",
        description: "Increases the DMG Bonus by 12%. When dealing Resonance Skill DMG, increases ATK by 12%, stacking up to 2. This effect lasts for 5s. When the equipped Resonator is not on the field, increases their ATK by an additional 12%.",
        baseAtk: 500,
        subStat: { label: "CRIT Rate", value: "36%" },
        image: "/images/weapons/stringmaster.png"
    };
