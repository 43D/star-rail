import { ApiInject } from "../../App";
import { CharHakushResponse, LCHakusResponse, RelicHakusResponse } from "../../infra/api/iStarRailApi";
import { setChars, setCharsBeta, setLCs, setLCsBeta, setRelics, setRelicsBeta } from "../localStorage/localStorageDataManager";


export const getAllDataApi = (api: ApiInject) => {
    const getCharData = async () => {
        const res = await api.starRailApi.getReleaseChar();
        setChars(Object.values(res.data.items));
    }

    const getRelicData = async () => {
        const res = await api.starRailApi.getReleaseRelics();
        setRelics(Object.values(res.data.items));
    }

    const getLCData = async () => {
        const res = await api.starRailApi.getReleaseLC();
        setLCs(Object.values(res.data.items));
    }

    const getBetaIds = async () => {
        const res = await api.starRailApiBeta.getBetaIds();
        const chars = await api.starRailApiBeta.getCharList();
        const lcs = await api.starRailApiBeta.getLCList();
        const relics = await api.starRailApiBeta.getRelicList();

        const filteredIChars = res.character.reduce((obj, key) => {
            obj[Number(key)] = chars[Number(key)];
            return obj;
        }, {} as CharHakushResponse);

        const filteredILCs = res.lightcone.reduce((obj, key) => {
            obj[Number(key)] = lcs[Number(key)];
            return obj;
        }, {} as LCHakusResponse);

        const filteredIRelics = res.relicset.reduce((obj, key) => {
            obj[Number(key)] = relics[Number(key)];
            return obj;
        }, {} as RelicHakusResponse);

        setCharsBeta(res.character, filteredIChars);
        setLCsBeta(res.lightcone, filteredILCs);
        setRelicsBeta(res.relicset, filteredIRelics);
    }

    const init = async () => {
        await getCharData();
        await getRelicData();
        await getLCData();
        await getBetaIds();
    }

    return {
        init
    }
}