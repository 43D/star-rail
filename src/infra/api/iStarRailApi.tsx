export type pathType = `Knight` | `Rogue` | `Mage` | `Warlock` | `Priest` | `Warrior` | `Shaman` | "Memory";
export type combatType = `Ice` | `Physical` | `Fire` | `Wind` | `Thunder` | `Quantum` | `Imaginary`;
export type RankChar = 5 | 4;
export type RankCharHakush = "CombatPowerAvatarRarityType5" | "CombatPowerAvatarRarityType4";
export type RankLC = 5 | 4 | 3;
export type RankLCHakush = "CombatPowerLightconeRarity3" | "CombatPowerLightconeRarity4" | "CombatPowerLightconeRarity5";
export type rankEidolon = 1 | 2 | 3 | 4 | 5 | 6;
export type relictPlanPiece = "NECK" | "OBJECT";
export type relictCavernaPiece = "HEAD" | "BODY" | "HAND" | "FOOT";

export type CharItensYattaResponse = {
    id: string;
    name: string;
    rank: RankChar;
    types: {
        pathType: pathType;
        combatType: combatType;
    };
    icon: string;
    release: number;
    route: string;
}

export type RelicItensYattaResponse = {
    id: string;
    name: string;
    icon: string;
    isPlanarSuit: boolean;
    levelList: number[];
    route: string;
}

export type LCItensYattaResponse = {
    id: string;
    name: string;
    rank: RankLC;
    types: {
        pathType: pathType;
    };
    icon: string;
    isSellable: boolean;
    route: string;
}

type CharYattaResponse = {
    response: number;
    data: {
        items: {
            [key: string]: CharItensYattaResponse;
        }
    }
}

type RelicYattaResponse = {
    response: number;
    data: {
        items: {
            [key: string]: RelicItensYattaResponse;
        }
    }
}

type LCYattaResponse = {
    response: number;
    data: {
        items: {
            [key: string]: LCItensYattaResponse;
        }
    }
}

type profileCharType = {
    faction: null | string;
    description: string;
    cv: null | {
        CV_CN: string;
        CV_JP: string;
        CV_KR: string;
        CV_EN: string;
    };
}

type eidolonsType = {
    [key: string]: {
        id: number;
        rank: rankEidolon;
        name: string;
        description: string;
        icon: string;
        params: number[] | null;
    };
}
export type upgradeMathType = {
    level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    skillBase: {
        attackBase: number;
        defenceBase: number;
        hPBase: number;
        speedBase: number;
        criticalChance: number;
        criticalDamage: number;
        baseAggro: number;
    };
    skillAdd: {
        attackAdd: number;
        defenceAdd: number;
        hPAdd: number;
    };
}

export type mainSkillType = {
    id: number;
    name: string;
    description: string;
    pointType: "Skill" | "Attribute" | "Special" | "Servant";
    maxLevel: number;
    isDefault: boolean;
    icon: string;
    skillList: null | {
        [key: string]: {
            name: string;
            tag: string;
            maxLevel: number;
            type: string;
            skillPoints: {
                base: number | null;
                need: number | null;
            };
            weaknessBreak: {
                one: number | null;
                spread: number | null;
                all: number | null;
            };
            description: string | null;
            descriptionSimple: string;
            "requiredParams": null;
            extraEffects: null | {
                name: string;
                description: string;
                icon: string;
            }[];
            attackType: string;
            damageType: string;
            icon: string;
            params: {
                [key: string]: number[];
            }
        };
    };
    statusList: null | {
        name: string;
        value: number;
        icon: string;
    }[];
    params: null | {
        [key: string]: number[];
    }
}

type CharServantType = {
    id: number
    name: string;
    servantSkills: number[];
}

export type CharByIdItensYattaResponse = {
    id: number;
    name: string;
    rank: RankChar;
    types: {
        pathType: {
            id: pathType;
            name: string;
        };
        combatType: {
            id: combatType;
            name: string;
        };
    };
    icon: string;
    release: number;
    route: string;
    fetter: profileCharType;
    eidolons: eidolonsType;
    upgrade: upgradeMathType[];
    servant: CharServantType | null;
    traces: {
        mainSkills: {
            [key: string]: mainSkillType;
        };
        subSkills: {
            [key: string]: mainSkillType;
        };
        servantSkills: {
            skills: {
                [key: string]: mainSkillType;
            };
            talents: {
                [key: string]: mainSkillType;
            };
        };
    };
}

type CharByIdYattaResponse = {
    response: number;
    data: CharByIdItensYattaResponse;
}


export type LCByIdItensYattaResponse = {
    id: number;
    name: string;
    rank: RankLC;
    types: {
        pathType: {
            id: pathType;
            name: string;
        };
    };
    icon: string;
    route: string;
    description: string;
    upgrade: upgradeMathType[];
    skill: {
        name: string;
        description: string;
        params: {
            [key: string]: number[];
        };
    }
}

type RelicPassive = {
    description: string;
    params: null | {
        [key: string]: number[];
    };
}

type RelicPc = {
    description: string;
    name: string;
    icon: string;
    story: string;
}

type RelicPcConfigMainStatus = {
    affixAdd: number;
    affixBase: number;
}

export type RelicByIdItensYattaResponse = {
    id: number;
    name: string;
    icon: string;
    levelList: number[];
    isPlanarSuit: boolean;
    skillList: {
        "2": RelicPassive;
        "4"?: RelicPassive;
    };
    suite: {
        "HEAD": RelicPc;
        "BODY": RelicPc;
        "HAND": RelicPc;
        "FOOT": RelicPc;
        "NECK": RelicPc;
        "OBJECT": RelicPc;
    };
    suiteConfig: {
        "HEAD": {
            [key: string]: {
                maxLevel: number;
                mainAffix: {
                    [key: string]: RelicPcConfigMainStatus;
                }
            }
        };
        "BODY": {
            [key: string]: {
                maxLevel: number;
                mainAffix: {
                    [key: string]: RelicPcConfigMainStatus;
                }
            }
        };
        "HAND": {
            [key: string]: {
                maxLevel: number;
                mainAffix: {
                    [key: string]: RelicPcConfigMainStatus;
                }
            }
        };
        "FOOT": {
            [key: string]: {
                maxLevel: number;
                mainAffix: {
                    [key: string]: RelicPcConfigMainStatus;
                }
            }
        };
        "NECK": {
            [key: string]: {
                maxLevel: number;
                mainAffix: {
                    [key: string]: RelicPcConfigMainStatus;
                }
            }
        };
        "OBJECT": {
            [key: string]: {
                maxLevel: number;
                mainAffix: {
                    [key: string]: RelicPcConfigMainStatus;
                }
            }
        };
    };
}

type LCByIdYattaResponse = {
    response: number;
    data: LCByIdItensYattaResponse;
}

type RelicByIdYattaResponse = {
    response: number;
    data: RelicByIdItensYattaResponse;
}


export type iYattaStarRailApi = {
    getReleaseChar: () => Promise<CharYattaResponse>;
    getReleaseRelics: () => Promise<RelicYattaResponse>; // https://api.yatta.top/hsr/v2/pt/relic
    getReleaseLC: () => Promise<LCYattaResponse>; //https://api.yatta.top/hsr/v2/en/equipment 
    getReleaseCharById: (id: string) => Promise<CharByIdYattaResponse>;
    getReleaseLCById: (id: string) => Promise<LCByIdYattaResponse>;
    getReleaseRelicsById: (id: string) => Promise<RelicByIdYattaResponse>; // https://https://api.yatta.top/hsr/v2/pt/relic/
}

type HakushBetaIdsType = {
    character: number[];
    lightcone: number[];
    relicset: number[];
}

export type CharItemHakushResponse = {
    id?: number;
    baseType: pathType;
    damageType: combatType;
    desc: string;
    en: string;
    icon: string;
    rank: RankCharHakush;
    release: number;
}

export type CharHakushResponse = {
    [key: number]: CharItemHakushResponse;
}

export type LCItensHakusResponse = {
    id?: number;
    baseType: pathType;
    desc: string;
    en: string;
    rank: RankLCHakush
}

export type LCHakusResponse = {
    [key: number]: LCItensHakusResponse;
}

export type RelicItensHakusResponse = {
    en: string;
    icon: string;
    set: {
        2: {
            en: string;
        },
        4?: {
            en: string;
        }
    }
}
export type RelicHakusResponse = {
    [key: number]: RelicItensHakusResponse;
}

type CharItemHakushDataRank = {
    Id: number;
    Name: string;
    Desc: string;
    ParamList: number[];
}

type CharItemHakushDataSkill = {
    Name: string;
    Desc: string;
    Type: string;
    Tag: string;
    SPBase: number;
    ShowStanceList: number[];
    SkillComboValueDelta: null | number;
    Level: {
        [key: string]: {
            Level: number;
            ParamList: number[];
        };
    }
}

type CharItemHakushDataSkillTree = {
    Icon: string;
    ParamList: number[];
    PointID: number;
    PointName: string | null;
    PointDesc: string | null;
    PointType: 1 | 2 | 3;
    StatusAddList: {
        $type: string;
        PropertyType: string;
        Value: number;
        Name: string;
    }[];
}

type CharItemHakushDataMemosprite = {
    Name: string;
    Icon: string;
    HPBase: string;
    HPInherit: string;
    HPSkill: number;
    SpeedBase: string;
    SpeedInherit: string;
    SpeedSkill: number;
    Aggro: number;
    Skills: {
        [key: string]: CharItemHakushDataSkill;
    };
    Talent: {
        [key: string]: {};
    };
}
type CharItemHakushDataStatus = {
    [key: string]: {
        AttackBase: number;
        AttackAdd: number;
        DefenceBase: number;
        DefenceAdd: number;
        HPBase: number;
        HPAdd: number;
        SpeedBase: number;
        CriticalChance: number;
        CriticalDamage: number;
        BaseAggro: number;
    };
}

export type CharItemHakushData = {
    Name: string;
    Desc: string;
    CharaInfo: {
        Camp: null | string;
        VA: {
            Chinese: null | string;
            Japanese: null | string;
            Korean: null | string;
            English: null | string;
        };
    };
    Rarity: "CombatPowerAvatarRarityType5" | "CombatPowerAvatarRarityType4";
    AvatarVOTag: string;
    SPNeed: number;
    BaseType: pathType;
    DamageType: combatType;
    Ranks: {
        "1": CharItemHakushDataRank;
        "2": CharItemHakushDataRank;
        "3": CharItemHakushDataRank;
        "4": CharItemHakushDataRank;
        "5": CharItemHakushDataRank;
        "6": CharItemHakushDataRank;
    };
    Skills: {
        [key: string]: CharItemHakushDataSkill;
    };
    SkillTrees: {
        [keyPointer: string]: {
            [key: string]: CharItemHakushDataSkillTree;
        };
    };
    Memosprite: CharItemHakushDataMemosprite;
    Stats: CharItemHakushDataStatus;
}

export type RelicItemHakushData = {
    Name: string;
    Icon: string;
    Parts: {
        [key: string]: {
            Name: string;
            Desc: string;
            Story: string;
        };
    };
    RequireNum: {
        "2": {
            Desc: string;
            ParamList: number[]
        };
        "4"?: {
            Desc: string;
            ParamList: number[]
        };
    };
};

export type LCItemHakushData = {
    Name: string;
    Desc: string;
    Rarity: "CombatPowerLightconeRarity5" | "CombatPowerLightconeRarity4" | "CombatPowerLightconeRarity3" | "CombatPowerLightconeRarity2";
    BaseType: pathType;
    Refinements: {
        Name: string;
        Desc: string;
        Level: {
            "1": { ParamList: number[]; };
            "2": { ParamList: number[]; };
            "3": { ParamList: number[]; };
            "4": { ParamList: number[]; };
            "5": { ParamList: number[]; };
        };
    };
    Stats: {
        EquipmentID: number;
        MaxLevel: number;
        BaseHP: number;
        BaseHPAdd: number;
        BaseAttack: number;
        BaseAttackAdd: number;
        BaseDefence: number;
        BaseDefenceAdd: number;
    }[];
}

export type iHakushStarRailApi = {
    getBetaIds: () => Promise<HakushBetaIdsType>;
    getCharList: () => Promise<CharHakushResponse>;
    getLCList: () => Promise<LCHakusResponse>;
    getRelicList: () => Promise<RelicHakusResponse>;
    getBetaCharById: (id: string) => Promise<CharItemHakushData>;
    getBetaLCById: (id: string) => Promise<LCItemHakushData>;
    getBetaRelicsById: (id: string) => Promise<RelicItemHakushData>;
}
