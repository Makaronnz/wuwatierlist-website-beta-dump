import { Weapon } from "../weaponTypes";

export const emerald_sentence: Weapon = {
        name: "Emerald Sentence",
        rarity: 5,
        type: "Sword",
        description: "ATK is increased by 12%. Casting Echo Skill within 10s after casting Intro Skill or Basic Attack grants 1 stack of Bamboo Cleaver, which grants 30% Heavy Attack DMG Bonus to the wielder. This effect can be triggered by Echoes of the same name once only, stacking up to 2 times, lasting for 12s. Casting Echo Skill at max stacks does not reset the duration. This effect can be triggered once every 10s and ends early if the wielder is switched off the field. Casting Intro Skill grants 20% Echo Skill DMG Bonus to all Resonators in the team for 30s. Effects of the same name cannot be stacked.",
        baseAtk: 587,
        subStat: { label: "CRIT Rate", value: "24.3%" },
        image: "/images/weapons/emeraldsentence.png"
    };
