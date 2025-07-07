import { CharByIdItensYattaResponse, upgradeMathType, CharItemHakushData, RankChar, CharItemHakushDataStatus, CharItemHakushDataRank, eidolonsType, CharItemHakushDataMemosprite, CharServantType } from "../../infra/api/iStarRailApi"

export type iCharBetaAdapter = {
    HakushToYatta: (data: CharItemHakushData) => CharByIdItensYattaResponse;
}

type Ranks = {
    "1": CharItemHakushDataRank;
    "2": CharItemHakushDataRank;
    "3": CharItemHakushDataRank;
    "4": CharItemHakushDataRank;
    "5": CharItemHakushDataRank;
    "6": CharItemHakushDataRank;
};

export const CharBetaAdapter = (): iCharBetaAdapter => {
    // const range = (start: number, end: number) => Array.from({ length: (end - start) }, (_, k) => String(k + start));

    const LevelHakushToLevelYatta = (data: CharItemHakushDataStatus, levelBase: number): upgradeMathType => (
        {
            level: levelBase as 0 | 1 | 2 | 3 | 4 | 5 | 6,
            skillAdd: {
                attackAdd: data.AttackAdd,
                defenceAdd: data.DefenceAdd,
                hPAdd: data.HPAdd
            },
            skillBase: {
                attackBase: data.AttackBase,
                baseAggro: data.BaseAggro,
                criticalChance: data.CriticalChance,
                criticalDamage: data.CriticalDamage,
                defenceBase: data.DefenceBase,
                hPBase: data.HPBase,
                speedBase: data.SpeedBase
            }
        }
    );

    const EidolonHakushToEidolonYatta = (data: Ranks, id_char: number): eidolonsType => ({
        [String(data["1"].Id)]: {
            description: data["1"].Desc,
            icon: `${id_char}/${id_char}_Rank_${1}.webp`,
            id: data["1"].Id,
            name: data["1"].Name,
            params: data["1"].ParamList,
            rank: 1
        },
        [String(data["2"].Id)]: {
            description: data["2"].Desc,
            icon: `${id_char}/${id_char}_Rank_${2}.webp`,
            id: data["2"].Id,
            name: data["2"].Name,
            params: data["2"].ParamList,
            rank: 2
        },
        [String(data["3"].Id)]: {
            description: data["3"].Desc,
            icon: `${id_char}/${id_char}_Rank_${3}.webp`,
            id: data["3"].Id,
            name: data["3"].Name,
            params: data["3"].ParamList,
            rank: 3
        },
        [String(data["4"].Id)]: {
            description: data["4"].Desc,
            icon: `${id_char}/${id_char}_Rank_${4}.webp`,
            id: data["4"].Id,
            name: data["4"].Name,
            params: data["4"].ParamList,
            rank: 4
        },
        [String(data["5"].Id)]: {
            description: data["5"].Desc,
            icon: `${id_char}/${id_char}_Rank_${5}.webp`,
            id: data["5"].Id,
            name: data["5"].Name,
            params: data["5"].ParamList,
            rank: 5
        },
        [String(data["6"].Id)]: {
            description: data["6"].Desc,
            icon: `${id_char}/${id_char}_Rank_${6}.webp`,
            id: data["6"].Id,
            name: data["6"].Name,
            params: data["6"].ParamList,
            rank: 6
        },
    })

    const SummorHakushToSummonYatta = (data: CharItemHakushDataMemosprite | {}): CharServantType | null => {
        if (!("Name" in data))
            return null;

        return ({
            id: Number(Object.keys(data.Skills)[0].slice(0, 5)),
            name: data.Name,
            servantSkills: Object.keys(data.Skills).map(a => Number(a))
        })

    }

    const HakushToYatta = (data: CharItemHakushData) => {
        data.Memosprite

        const res: CharByIdItensYattaResponse = {
            id: Number(Object.keys(data.Skills)[0].slice(0, 4)),
            name: data.Name,
            rank: Number(data.Rarity.split("RarityType")[1]) as RankChar,
            route: "",
            icon: Object.keys(data.Skills)[0].slice(0, 4),
            release: 0,
            types: {
                combatType: {
                    id: data.DamageType,
                    name: "teste1"
                },
                pathType: {
                    id: data.BaseType,
                    name: "teste2"
                }
            },
            fetter: {
                cv: {
                    CV_CN: data.CharaInfo.VA.Chinese ? data.CharaInfo.VA.Chinese : "",
                    CV_EN: data.CharaInfo.VA.English ? data.CharaInfo.VA.English : "",
                    CV_JP: data.CharaInfo.VA.Japanese ? data.CharaInfo.VA.Japanese : "",
                    CV_KR: data.CharaInfo.VA.Korean ? data.CharaInfo.VA.Korean : ""
                },
                description: data.Desc ? data.Desc : "",
                faction: data.CharaInfo.Camp
            },
            upgrade: [
                LevelHakushToLevelYatta(data.Stats['0'], 0),
                LevelHakushToLevelYatta(data.Stats['1'], 1),
                LevelHakushToLevelYatta(data.Stats['2'], 2),
                LevelHakushToLevelYatta(data.Stats['3'], 3),
                LevelHakushToLevelYatta(data.Stats['4'], 4),
                LevelHakushToLevelYatta(data.Stats['5'], 5),
                LevelHakushToLevelYatta(data.Stats['6'], 6)
            ],
            eidolons: EidolonHakushToEidolonYatta(data.Ranks, Number(Object.keys(data.Skills)[0].slice(0, 4))),
            servant: SummorHakushToSummonYatta(data.Memosprite),
            traces: {
                mainSkills: {},
                servantSkills: !("Name" in data.Memosprite) ? null : {
                    skills: {},
                    talents: {}
                },
                subSkills: {}
            }
        }
        return res;
    }

    return {
        HakushToYatta
    }
}