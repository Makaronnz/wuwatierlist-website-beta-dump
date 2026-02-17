import { Echo } from "../echoTypes";

export const traffic_illuminator: Echo = {
        name: "Traffic Illuminator",
        class: "Common",
        cost: 1,
        description: "Summon a Traffic Illuminator, immobilizing enemies for up to 1s. The immobilization will be lifted once the enemy is hit. CD: 15s.",
        sets: ["Molten Rift", "Void Thunder", "Sierra Gale"],
        image: "/images/echoes/trafficilluminator.png"
    };
