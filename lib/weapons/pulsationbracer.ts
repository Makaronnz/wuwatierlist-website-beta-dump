import { Weapon } from "../weaponTypes";

export const pulsation_bracer: Weapon = {
        name: "Pulsation Bracer",
        rarity: 5,
        type: "Gauntlets",
        description: "Increases ATK by 12%. Dealing damage to targets under Tune Strain: Interfered grants 6% Basic Attack DMG Bonus for 3s, stacking up to 4 times. This effect can be triggered once every 0.5s. Retriggering the effect resets its duration.",
        baseAtk: 587,
        subStat: { label: "CRIT Rate", value: "24.3%" },
        image: "/images/weapons/pulsationbracer.png"
    };
