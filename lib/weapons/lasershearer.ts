import { Weapon } from "../weaponTypes";

export const laser_shearer: Weapon = {
        name: "Laser Shearer",
        rarity: 5,
        type: "Sword",
        description: "Increases ATK by 12%. Dealing damage to targets under Tune Strain: Interfered grants 24% Resonance Skill Bonus for 3s. Retriggering the effect resets its duration.",
        baseAtk: 587,
        subStat: { label: "Energy Reg.", value: "38.8%" },
        image: "/images/weapons/lasershearer.png"
    };
