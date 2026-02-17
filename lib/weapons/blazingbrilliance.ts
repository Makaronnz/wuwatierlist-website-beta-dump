import { Weapon } from "../weaponTypes";

export const blazing_brilliance: Weapon = {
        name: "Blazing Brilliance",
        rarity: 5,
        type: "Sword",
        description: "ATK increased by 12%. The equipper gains 1 stack of Searing Feather upon dealing damage, which can be triggered once every 0.5s, and gains 5 stacks of the same effect upon casting Resonance Skill. Each stack of Searing Feather gives 4% additional Resonance Skill DMG Bonus for up to 14 stacks. All stacks will be removed within 12s after reaching the max stack.",
        baseAtk: 587,
        subStat: { label: "CRIT DMG", value: "48.6%" },
        image: "/images/weapons/blazingbrilliance.png"
    };
