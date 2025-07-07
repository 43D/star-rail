import { ApiInject } from "../../App";
import { CharHakushResponse, LCHakusResponse, RelicHakusResponse } from "../../infra/api/iStarRailApi";
import { setChars, setCharsBeta, setLCs, setLCsBeta, setRelics, setRelicsBeta } from "../localStorage/localStorageDataManager";


export const getAllDataApi = (api: ApiInject) => {
    const getCharData = () => api.starRailApi.getReleaseChar().then(res => {
        setChars(Object.values(res.data.items));
    });

    const getRelicData = () => api.starRailApi.getReleaseRelics().then(res => {
        setRelics(Object.values(res.data.items));
    });

    const getLCData = () => api.starRailApi.getReleaseLC().then(res => {
        setLCs(Object.values(res.data.items));
    });

    const getBetaIds = async () => {
        const res = await api.starRailApiBeta.getBetaIds();
        api.starRailApiBeta.getCharList().then(chars => {
            const filteredIChars = res.character.reduce((obj, key) => {
                obj[Number(key)] = chars[Number(key)];
                return obj;
            }, {} as CharHakushResponse);
            setCharsBeta(res.character, filteredIChars);
        });
        api.starRailApiBeta.getLCList().then(lcs => {
            const filteredILCs = res.lightcone.reduce((obj, key) => {
                obj[Number(key)] = lcs[Number(key)];
                return obj;
            }, {} as LCHakusResponse);
            setLCsBeta(res.lightcone, filteredILCs);
        });

        api.starRailApiBeta.getRelicList().then(relics => {
            const filteredIRelics = res.relicset.reduce((obj, key) => {
                obj[Number(key)] = relics[Number(key)];
                return obj;
            }, {} as RelicHakusResponse);
            setRelicsBeta(res.relicset, filteredIRelics);
        });
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