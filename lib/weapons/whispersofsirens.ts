import { Weapon } from "../weaponTypes";

export const whispers_of_sirens: Weapon = {
        name: "Whispers of Sirens",
        rarity: 5,
        type: "Rectifier",
        description: "Increases ATK by 12%. Casting Echo Skill within 10s after casting Intro Skill or Basic Attacks grants 1 stacks of Gentle Dream. Echoes with the same name can only trigger this effect once, stacking up to 2 times, lasting for 10s. When reaching 2 stacks, casting Echo Skill no longer resets the duration of this effect. This effect activates up to once per 10s. Switching to another Resonator ends this effect early.\nWith 1 stacks: Grants 40% Basic Attack DMG Bonus.\nWith 2 stacks: Ignores 12% of the target's Havoc RES.",
        baseAtk: 500,
        subStat: { label: "CRIT DMG", value: "72%" },
        image: "/images/weapons/whispersofsirens.png"
    };
