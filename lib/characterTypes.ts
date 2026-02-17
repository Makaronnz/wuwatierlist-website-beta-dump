/**
 * Character Data Definition
 */

export type ElementType = "Havoc" | "Fusion" | "Glacio" | "Electro" | "Spectro" | "Aero";
export type WeaponType = "Broadblade" | "Sword" | "Pistols" | "Gauntlets" | "Rectifier";
export type RoleType = "Main DPS" | "Sub DPS" | "Support" | "Healer" | "Hybrid";

// Image Mappings
export const ElementImages: Record<ElementType, string> = {
    "Spectro": "/images/echoes/setbonus/celestiallight.png",
    "Glacio": "/images/echoes/setbonus/freezingfrost.png",
    "Havoc": "/images/echoes/setbonus/havoceclipse.png",
    "Fusion": "/images/echoes/setbonus/moltenrift.png",
    "Aero": "/images/echoes/setbonus/sierragale.png",
    "Electro": "/images/echoes/setbonus/voidthunder.png"
};
export type TierType = "T0" | "T0.5" | "R0" | "R0.5" | "R1" | "R1.5" | "R2" | "R2.5" | "R3";

export interface CharStats {
    hp: number;
    atk: number;
    def: number;
}

export interface SkillAttribute {
    name: string;
    value: string; // e.g. "70.08% + 23.36% * 3"
}

export interface SkillDetail {
    name: string;
    type: "Basic" | "Skill" | "Ultimate" | "Forte" | "Intro" | "Outro" | "Passive";
    description: string; // Markdown supported
    attributes?: SkillAttribute[]; // New: Detailed multipliers
    priority?: number; // 1 = High, 5 = Low
}

export interface ResonanceChain {
    node: string;
    name: string;
    description: string;
    icon?: string; // Optional icon path
}

export interface WeaponRec {
    name: string;
    rank: string; // e.g. "Signature", "Rank 5", "S", "A"
    rarity: number; // 1-5
    description: string;
    mainStat?: string; // e.g. "ATK: 587"
    subStat?: string; // e.g. "Crit Rate: 24.3%"
    image: string;
}

export interface EchoRec {
    set: string;
    mainEcho: string;
    stats: {
        cost4: string[];
        cost3: string[];
        cost1: string[];
        substats: string[];
    };
    description: string; // Brief overview
    recommendation_reason?: string; // Why this set is good
    echo_breakdown?: {
        cost4: { name: string; image: string; mainStats: string[] }[];
        cost3: { name: string; image: string; mainStats: string[] }[];
        cost1: { name: string; image: string; mainStats: string[] }[];
    };
}

export interface TeamMate {
    name: string;
    role: "Main DPS" | "Sub DPS" | "Support" | "Healer" | "Hybrid" | "Buffer";
    synergy?: string; // Legacy field
}

export interface TeamRec {
    name: string; // Team Name e.g. "Hypercarry Jiyan"
    members: TeamMate[];
    description: string; // Why this team works
}

// Profile Types
export type ProfileType = "Versatile" | "Specialist";
export type PotentialRank = "S+" | "S" | "A" | "B" | "C" | "D";

export interface Character {
    id: string;
    name: string;
    rarity: 4 | 5;
    element: ElementType;
    weaponType: WeaponType;
    role: RoleType;
    tags: string[];
    tier: {
        overall: TierType;
        tower: TierType;
        wastes: TierType;
    };
    profileType?: ProfileType; // New: Classification
    potential?: PotentialRank; // New: Potential Rank
    imagePortrait: string;
    imageIcon: string;
    imageCard: string;
    stats: CharStats;
    baseStats?: CharStats; // Added baseStats
    maxEnergy?: number;    // Added maxEnergy
    minorFortes?: { name: string; value: string; stat: string; amount: number }[]; // Made optional
    materials?: { // Made optional
        ascension: { name: string; count: number; icon?: string }[]; // Made icon optional
        skills: { name: string; count: number; icon?: string }[];   // Made icon optional
        ascensionRanks?: {
            rank: number;
            levelRange: string;
            materials: { name: string; count: number; icon?: string }[]; // Made icon optional
        }[];
        weapon?: {
            name: string;
            icon: string;
            total: { name: string; count: number; icon?: string }[]; // Made icon optional
            ascensionRanks: {
                rank: number;
                levelRange: string;
                materials: { name: string; count: number; icon?: string }[]; // Made icon optional
            }[];
        };
    };
    analysis: {
        overview: string;
        playstyle: string;
        pros: string[];
        cons: string[];
    };
    skills: SkillDetail[];
    resonanceChain: ResonanceChain[];
    rotation: string[];
    builds: {
        weapons: WeaponRec[];
        echoes: EchoRec[];
        stats_priority: string;
    };
    teams: TeamRec[];
}
