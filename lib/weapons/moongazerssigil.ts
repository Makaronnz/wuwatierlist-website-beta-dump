import { Weapon } from "../weaponTypes";

export const moongazer_s_sigil: Weapon = {
        name: "Moongazer's Sigil",
        rarity: 5,
        type: "Gauntlets",
        description: "Increases ATK by 12%. Casting Intro Skill or Resonance Liberation increases Resonance Liberation DMG by 20% for 15s. Obtaining Shield allows Resonance Liberation DMG to ignore 7.2% of the target's DEF for 7s, stacking up to 5 times. This effect is triggered once every 0.5s. Upon casting Intro Skill, this effect reaches max stacks immediately, lasting for 3s.",
        baseAtk: 500,
        subStat: { label: "CRIT Rate", value: "36%" },
        image: "/images/weapons/moongazerssigil.png"
    };
