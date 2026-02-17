import { Weapon } from "../weaponTypes";

export const lunar_cutter: Weapon = {
        name: "Lunar Cutter",
        rarity: 4,
        type: "Sword",
        description: "Equipped Resonator gains 6 stack(s) of Oath upon entering the battlefield. Each stack increases ATK by 2%, up to 6 stacks. This effect can be triggered 1 time(s) every 12s. Oath reduces by 1 stack(s) every 2s. Equipped Resonator gains an additional 6 stack(s) of Oath upon defeating an enemy.",
        baseAtk: 412,
        subStat: { label: "ATK", value: "30.3%" },
        image: "/images/weapons/lunarcutter.png"
    };
