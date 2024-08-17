export type pathType = `Knight` | `Rogue` | `Mage` | `Warlock` | `Priest` | `Warrior` | `Shaman`;
export type combatType = `Ice` | `Physical` | `Fire` | `Wind` | `Thunder` | `Quantum` | `Imaginary`;
export type RankChar = 5 | 4;
export type RankLC = 5 | 4 | 3;
export type rankEidolon = 1 | 2 | 3 | 4 | 5 | 6;

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
type upgradeMathType = {
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

type mainSkillType = {
    id: number;
    pointType: "Skill" | "Attribute" | "Special";
    maxLevel: number;
    isDefault: boolean;
    icon: string;
    skillList: null | {
        [key: string]: {
            name: string;
            tag: string;
            type: string;
            skillPoints: {
                base: number | null;
                need: number | null;
            };
            weaknessBreak: {
                one: number | null;
                spread: number | null;
            };
            description: string;
            descriptionSimple: string;
            "requiredParams": null;
            extraEffects: null | {
                name: string;
                description: string;
                icon: string;
            };
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
    };
    params: null | {
        [key: string]: number[];
    }
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
    traces: {
        mainSkills: {
            [key: string]: mainSkillType;
        };
        subSkills: {
            [key: string]: mainSkillType;
        };
    };
}

type CharByIdYattaResponse = {
    response: number;
    data: CharByIdItensYattaResponse;
}

export type iYattaStarRailApi = {
    getReleaseChar: () => Promise<CharYattaResponse>;
    getReleaseRelics: () => Promise<RelicYattaResponse>; // https://api.yatta.top/hsr/v2/pt/relic
    getReleaseLC: () => Promise<LCYattaResponse>; //https://api.yatta.top/hsr/v2/en/equipment 
    getReleaseCharById: (id: string) => Promise<CharByIdYattaResponse>;
}