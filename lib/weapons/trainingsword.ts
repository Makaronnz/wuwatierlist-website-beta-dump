import { Weapon } from "../weaponTypes";

export const training_sword: Weapon = {
        name: "Training Sword",
        rarity: 1,
        type: "Sword",
        description: "Increases ATK by 4%.",
        baseAtk: 250,
        subStat: { label: "ATK", value: "11.4%" },
        image: "/images/weapons/trainingsword.png"
    };
