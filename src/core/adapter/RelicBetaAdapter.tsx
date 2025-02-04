import { RelicByIdItensYattaResponse, RelicItemHakushData } from "../../infra/api/iStarRailApi"
import { SuiteConfigFactory } from "./RelicSetFactory";

type LevelYattaType = {
    [key: string]: number[];
};

type PartsType = {
    [key: string]: {
        Name: string;
        Desc: string;
        Story: string;
    };
};

export type iRelicBetaAdapter = {
    HakushToYatta: (data: RelicItemHakushData, id: number) => RelicByIdItensYattaResponse;
}

export const RelicBetaAdapter = (): iRelicBetaAdapter => {
    const LevelHakushToLevelYatta = (data: number[]) => {
        const res: LevelYattaType = {};
        data.forEach((value, index) => res[String(index + 1)] = [value]);
        return res;
    }

    const  transformarSequencia = (seq: string) => {
        const subSequencia = seq.substring(1);
        return `${subSequencia.slice(0, -1)}_${subSequencia.slice(-1)}`;
    }

    const BuildSuiteStory = (data: PartsType, isPlanarSuit: boolean) => {
        const res = {
            HEAD: { description: "", name: "", icon: "", story: "" },
            BODY: { description: "", name: "", icon: "", story: "" },
            HAND: { description: "", name: "", icon: "", story: "" },
            FOOT: { description: "", name: "", icon: "", story: "" },
            NECK: { description: "", name: "", icon: "", story: "" },
            OBJECT: { description: "", name: "", icon: "", story: "" }
        };
        const mapa = Object.keys(data).map((key) => ({ description: data[key].Desc, name: data[key].Name, icon: `IconRelic_${transformarSequencia(key)}.webp`, story: data[key].Story }))
        if (isPlanarSuit) {
            res.NECK = mapa[0];
            res.OBJECT = mapa[1];
        }else {
            res.HEAD = mapa[0];
            res.BODY = mapa[1];
            res.HAND = mapa[2];
            res.FOOT = mapa[3];
        }
        return res;
    }

    const HakushToYatta = (data: RelicItemHakushData, id: number) => {
        const res: RelicByIdItensYattaResponse = {
            id: id,
            name: data.Name,
            icon: data.Icon,
            isPlanarSuit: !("4" in data.RequireNum),
            levelList: [2, 3, 4, 5],
            suiteConfig: SuiteConfigFactory(),
            skillList: {
                "2": {
                    description: data.RequireNum["2"].Desc,
                    params: LevelHakushToLevelYatta(data.RequireNum['2'].ParamList)
                }
            },
            suite: BuildSuiteStory(data.Parts, !("4" in data.RequireNum))
        }
        if ("4" in data.RequireNum && data.RequireNum["4"])
            res.skillList["4"] = {
                description: data.RequireNum["4"].Desc,
                params: LevelHakushToLevelYatta(data.RequireNum['4'].ParamList)
            }

        return res;
    }

    return {
        HakushToYatta
    }
}