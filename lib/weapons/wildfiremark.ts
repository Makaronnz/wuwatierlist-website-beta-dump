import { Weapon } from "../weaponTypes";

export const wildfire_mark: Weapon = {
        name: "Wildfire Mark",
        rarity: 5,
        type: "Broadblade",
        description: "Increases ATK by 12%. Performing Intro Skill or Resonance Liberation increases Resonance Liberation DMG by 24% for 6s. Dealing Heavy Attack DMG extends this effect by 4s, up to 1 time. Each successful extension gives 24% Fusion DMG Bonus to all Resonators in the team for 30s. Effects of the same name cannot be stacked.",
        baseAtk: 587,
        subStat: { label: "CRIT DMG", value: "48.6%" },
        image: "/images/weapons/wildfiremark.png"
    };
