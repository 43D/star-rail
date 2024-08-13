import { ApiInject } from "../../App";
import { setCharList, setLCList, setRelicList } from "../localStorage/localStorageDataManager";


export const getAllDataApi = (api: ApiInject) => {
    const getCharData = async () => {
        const res = await api.starRailApi.getReleaseChar();
        setCharList(Object.values(res.data.items));
    }

    const getRelicData = async () => {
        const res = await api.starRailApi.getReleaseRelics();
        setRelicList(Object.values(res.data.items));
    }

    const getLCData = async () => {
        const res = await api.starRailApi.getReleaseLC();
        setLCList(Object.values(res.data.items));
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