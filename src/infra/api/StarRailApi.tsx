import { base_url_hakush, base_url_hakush_data, base_url_hakush_data_language } from "./hakush/hakush";
import { iHakushStarRailApi, iYattaStarRailApi } from "./iStarRailApi";
import { base_url_yatta } from "./yatta/yatta";

const getHeader = () => {
    const myHeaders = new Headers();
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return requestOptions;
}

export const StarRailApi = (): iYattaStarRailApi => {
    const fetchAPIAsync = async (parse: string, requestOptions: RequestInit) => {
        return await fetch(base_url_yatta + parse, requestOptions)
            .then(async response => {
                return response.text();
            })
            .then(result => { return JSON.parse(result) })
            .catch(error => {
                try {
                    return JSON.parse(error.message)
                } catch (error2) {
                    return {
                        "status": error.status,
                        "error": error.message
                    }
                }
            });
    }

    const getResponse = (endpoint: string) => {
        const requestOptions = getHeader();
        return fetchAPIAsync(endpoint, requestOptions);
    }

    const getReleaseChar = () => getResponse(`avatar`);
    const getReleaseRelics = () => getResponse(`relic`);
    const getReleaseLC = () => getResponse(`equipment`);
    const getReleaseCharById = (id: string) => getResponse(`avatar/${id}`);
    const getReleaseLCById = (id: string) => getResponse(`equipment/${id}`);
    const getReleaseRelicsById = (id: string) => getResponse(`relic/${id}`);

    return {
        getReleaseChar,
        getReleaseRelics,
        getReleaseLC,
        getReleaseCharById,
        getReleaseLCById,
        getReleaseRelicsById
    }
}

export const StarRailApiBeta = (): iHakushStarRailApi => {
    const fetchAPIAsync = async (parse: string, requestOptions: RequestInit) => {
        return await fetch(parse, requestOptions)
            .then(async response => {
                return response.text();
            })
            .then(result => { return JSON.parse(result) })
            .catch(error => {
                try {
                    return JSON.parse(error.message)
                } catch (error2) {
                    return {
                        "status": error.status,
                        "error": error.message
                    }
                }
            });
    }

    const getResponseBase = (endpoint: string) => {
        const requestOptions = getHeader();
        return fetchAPIAsync(`${base_url_hakush}${endpoint}`, requestOptions);
    }

    const getResponseData = (endpoint: string) => {
        const requestOptions = getHeader();
        return fetchAPIAsync(`${base_url_hakush_data}${endpoint}`, requestOptions);
    }
    base_url_hakush_data_language;
    // const getResponseDataLanguage = (endpoint: string) => {
    //     const requestOptions = getHeader();
    //     return fetchAPIAsync(`${base_url_hakush_data_language}${endpoint}`, requestOptions);
    // }

    const getBetaIds = () => getResponseBase("new.json");
    const getCharList = () => getResponseData("character.json");
    const getLCList = () => getResponseData("lightcone.json");
    const getRelicList = () => getResponseData("relicset.json");
    
    return {
        getBetaIds,
        getCharList,
        getLCList,
        getRelicList
    }
}