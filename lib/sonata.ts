export interface SonataEffect {
    name: string;
    image: string;
    twoPiece: string;
    fivePiece: string;
}

export const sonataEffects: SonataEffect[] = [
    {
        name: "Celestial Light",
        image: "/images/echoes/setbonus/celestiallight.png",
        twoPiece: "Spectro DMG +10%",
        fivePiece: "Spectro DMG +30% for 15s after releasing Intro Skill."
    },
    {
        name: "Crown of Valor",
        image: "/images/echoes/setbonus/crownofvalor.png",
        twoPiece: "Upon gaining a Shield, increase the Resonator's ATK by 6% and Crit DMG by 4% for 4s. This effect can be triggered once every 0.5s and stacks up to 5 times.",
        fivePiece: "(3-pc Set Bonus)" // Note: Crown of Valor is 3pc in provided text, seemingly cost 3 sets? Or user denoted it as 3pc. The image provided shows 3pc. I will assume full set is meant.
    },
    {
        name: "Dream of the Lost",
        image: "/images/echoes/setbonus/dreamofthelost.png",
        twoPiece: "Holding 0 Resonance Energy increases Crit. Rate by 20% and grants 35% Echo Skill DMG Bonus.",
        fivePiece: "(3-pc Set Bonus)"
    },
    {
        name: "Empyrean Anthem",
        image: "/images/echoes/setbonus/empyreananthem.png",
        twoPiece: "Energy Regen +10%",
        fivePiece: "Increase the Resonator's Coordinated Attack DMG by 80%. Upon a critical hit of Coordinated Attack, increase the active Resonator's ATK by 20% for 4s."
    },
    {
        name: "Eternal Radiance",
        image: "/images/echoes/setbonus/eternalradiance.png",
        twoPiece: "Spectro DMG +10%",
        fivePiece: "Inflicting enemies with Spectro Frazzle increases Crit. Rate by 20% for 15s. Attacking enemies with 10 stacks of Spectro Frazzle grants 15% Spectro DMG Bonus for 15s."
    },
    {
        name: "Flamewing's Shadow",
        image: "/images/echoes/setbonus/flamewingsshadow.png",
        twoPiece: "Dealing Echo Skill DMG increases Heavy Attack Crit. Rate by 20% for 6s. Dealing Heavy Attack DMG increases Echo Skill Crit. Rate by 20% for 6s. While both effects are active, gain 16% Fusion DMG Bonus.",
        fivePiece: "(3-pc Set Bonus)"
    },
    {
        name: "Flaming Clawprint",
        image: "/images/echoes/setbonus/flamingclawprint.png",
        twoPiece: "Fusion DMG +10%",
        fivePiece: "Casting Resonance Liberation increases Fusion DMG of Resonators in the team by 15% and the caster's Resonance Liberation DMG by 20%, lasting for 35s."
    },
    {
        name: "Freezing Frost",
        image: "/images/echoes/setbonus/freezingfrost.png",
        twoPiece: "Glacio DMG +10%",
        fivePiece: "Glacio DMG +10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s."
    },
    {
        name: "Frosty Resolve",
        image: "/images/echoes/setbonus/frostyresolve.png",
        twoPiece: "Resonance Skill DMG +12%",
        fivePiece: "Casting Resonance Skill grants 22.5% Glacio DMG Bonus for 15s and casting Resonance Liberation increases Resonance Skill DMG by 18%, lasting for 5s. This effect stacks up to 2 times."
    },
    {
        name: "Gusts of Welkin",
        image: "/images/echoes/setbonus/gustsofwelkin.png",
        twoPiece: "Aero DMG +10%",
        fivePiece: "Inflicting Aero Erosion on enemies increases Aero DMG for all Resonators in the team by 15%, and for the Resonator triggering this effect by an additional 15%, lasting for 20s."
    },
    {
        name: "Halo of Starry Radiance",
        image: "/images/echoes/setbonus/haloofstarryradiance.png",
        twoPiece: "Healing +10%",
        fivePiece: "When healing a Resonator in the team, every 1% of Off-Tune Buildup Rate grants a 0.2% ATK increase to all Resonators in the team for 4s, up to 25%."
    },
    {
        name: "Havoc Eclipse",
        image: "/images/echoes/setbonus/havoceclipse.png",
        twoPiece: "Havoc DMG +10%",
        fivePiece: "Havoc DMG +7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s."
    },
    {
        name: "Law of Harmony",
        image: "/images/echoes/setbonus/lawofharmony.png",
        twoPiece: "Casting Echo Skill grants 30% Heavy Attack DMG Bonus to the caster for 4s. Additionally, all Resonators in the team gain 4% Echo Skill DMG Bonus for 30s, stacking up to 4 times.",
        fivePiece: "(3-pc Set Bonus)"
    },
    {
        name: "Lingering Tunes",
        image: "/images/echoes/setbonus/lingeringtunes.png",
        twoPiece: "ATK +10%",
        fivePiece: "While on the field, ATK increases by 5% every 1.5s. This effect stacks up to 4 stacks. Outro Skill DMG +60%."
    },
    {
        name: "Midnight Veil",
        image: "/images/echoes/setbonus/midnightveil.png",
        twoPiece: "Havoc DMG +10%",
        fivePiece: "When Outro Skill is triggered, deal additional 480% Havoc DMG to surrounding enemies, and grants the incoming Resonator 15% Havoc DMG Bonus for 15s."
    },
    {
        name: "Molten Rift",
        image: "/images/echoes/setbonus/moltenrift.png",
        twoPiece: "Fusion DMG +10%",
        fivePiece: "Fusion DMG +30% for 15s after releasing Resonance Skill."
    },
    {
        name: "Moonlit Clouds",
        image: "/images/echoes/setbonus/moonlitclouds.png",
        twoPiece: "Energy Regen +10%",
        fivePiece: "After using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s."
    },
    {
        name: "Pact of Neonlight Leap",
        image: "/images/echoes/setbonus/pactofneonlightleap.png",
        twoPiece: "Spectro DMG +10%",
        fivePiece: "Casting outro Skill increases the ATK of the incoming Resonator who casts Intro Skill by 15%. Each point of Tune Break Boost the incoming Resonator has additionally increases their ATK by 0.3%, up to 15%."
    },
    {
        name: "Rejuvenating Glow",
        image: "/images/echoes/setbonus/rejuvenatingglow.png",
        twoPiece: "Healing Bonus +10%",
        fivePiece: "Increases the ATK of all party members by 15% for 30s upon healing allies."
    },
    {
        name: "Rite of Gilded Revelation",
        image: "/images/echoes/setbonus/riteofgildedrevelation.png",
        twoPiece: "Spectro DMG +10%",
        fivePiece: "Dealing Basic Attack DMG increases Spectro DMG by 10% for 5s, stacking up to 3 times. With 3 stacks, casting Resonance Liberation grants 40% Basic Attack DMG Bonus."
    },
    {
        name: "Sierra Gale",
        image: "/images/echoes/setbonus/sierragale.png",
        twoPiece: "Aero DMG +10%",
        fivePiece: "Aero DMG +30% for 15s after releasing Intro Skill."
    },
    {
        name: "Thread of Severed Fate",
        image: "/images/echoes/setbonus/threadofseveredfate.png",
        twoPiece: "Inflicting Havoc Bane increases the Resonator's ATK by 20% and grants 30% Resonance Liberation DMG Bonus for 5s.",
        fivePiece: "(3-pc Set Bonus)"
    },
    {
        name: "Tidebreaking Courage",
        image: "/images/echoes/setbonus/tidebreakingcourage.png",
        twoPiece: "Energy Regen +10%",
        fivePiece: "Increase the Resonator's ATK by 15%. Reaching 250% Energy Regen increases all Attribute DMG by 30% for the Resonator."
    },
    {
        name: "Void Thunder",
        image: "/images/echoes/setbonus/voidthunder.png",
        twoPiece: "Electro DMG +10%",
        fivePiece: "Electro DMG +15% after releasing Heavy Attack or Resonance Skill. This effect stacks up to 2 times, each stack lasts 15s."
    },
    {
        name: "Windward Pilgrimage",
        image: "/images/echoes/setbonus/windwardpilgrimage.png",
        twoPiece: "Aero DMG +10%",
        fivePiece: "Hitting a target with Aero Erosion increases Crit Rate by 10% and grants 30% Aero DMG Bonus, lasting for 10s."
    }
];
