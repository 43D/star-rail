import { ApiInject } from "../../App";
import { setCharList } from "../localStorage/localStorageCharManager";


export const getAllDataApi = (api: ApiInject) => {
    const getCharData = async () => {
        const res = await api.starRailApi.getReleaseChar();
        setCharList(Object.values(res.data.items));
    }

    const init = async () => {
        await getCharData();
    }

    return {
        init
    }
}