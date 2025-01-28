import { LCItemHakushData, LCByIdItensYattaResponse, RankLC, upgradeMathType } from "../../infra/api/iStarRailApi"

type LevelHakushType = {
    [key: string]: { ParamList: number[]; };
};

type LevelYattaType = {
    [key: string]: number[];
};

export type iLcBetaAdapter = {
    HakushToYatta: (data: LCItemHakushData) => LCByIdItensYattaResponse;
}

export const LcBetaAdapter = (): iLcBetaAdapter => {
    const range = (start: number, end: number) => Array.from({ length: (end - start) }, (_, k) => String(k + start));
    const LevelHakushToLevelYatta = (data: LevelHakushType) => {
        const listaIds = range(1, data['1'].ParamList.length + 1)
        const res: LevelYattaType = {};
        listaIds.forEach((value) => res[value] = []);
        Object.keys(data).sort((a, b) => Number(a) - Number(b)).forEach((key) => {
            data[key].ParamList.forEach((value, index) =>
                res[String(index + 1)].push(value)
            )
        });
        return res;
    }

    const HakushToYatta = (data: LCItemHakushData) => {
        const res: LCByIdItensYattaResponse = {
            id: data.Stats[0].EquipmentID,
            name: data.Name,
            types: {
                pathType: {
                    id: data.BaseType,
                    name: ""
                }
            },
            rank: Number(data.Rarity.split("Rarity")[1]) as RankLC,
            route: "",
            icon: String(data.Stats[0].EquipmentID),
            description: data.Desc,
            skill: {
                name: data.Refinements.Name,
                description: data.Refinements.Desc,
                params: LevelHakushToLevelYatta(data.Refinements.Level)
            },
            upgrade: data.Stats.map((lvl, index): upgradeMathType => ({
                level: index as 0 | 1 | 5 | 4 | 3 | 2 | 6,
                skillBase: {
                    hPBase: lvl.BaseHP,
                    attackBase: lvl.BaseAttack,
                    defenceBase: lvl.BaseDefence,
                    baseAggro: 0,
                    criticalChance: 0,
                    criticalDamage: 0,
                    speedBase: 0
                },
                skillAdd: {
                    hPAdd: lvl.BaseHPAdd,
                    attackAdd: lvl.BaseAttackAdd,
                    defenceAdd: lvl.BaseDefenceAdd
                }
            }))
        }
        return res;
    }

    return {
        HakushToYatta
    }
}