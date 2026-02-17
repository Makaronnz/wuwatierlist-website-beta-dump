import { Weapon } from "../weaponTypes";

export const spectrum_blaster: Weapon = {
        name: "Spectrum Blaster",
        rarity: 5,
        type: "Pistols",
        description: "Increases ATK by 12%. Casting Intro Skill or hitting the target with Basic Attack increases the wielder's Basic Attack DMG by 36% for 4s. Each time the wielder inflicts Tune Rupture - Shifting or Tune Strain - Shifting during Basic Attacks, all DMG dealt by Resonators in the team is increased by 8% for 30s, up to 3 stacks. Effects of the same name cannot be stacked.",
        baseAtk: 587,
        subStat: { label: "CRIT Rate", value: "24.3%" },
        image: "/images/weapons/spectrumblaster.png"
    };
