import { ApiInject } from "../../App";
import { setChars, setLCs, setRelics } from "../localStorage/localStorageDataManager";


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

    const init = async () => {
        await getCharData();
        await getRelicData();
        await getLCData();
    }

    return {
        init
    }
}