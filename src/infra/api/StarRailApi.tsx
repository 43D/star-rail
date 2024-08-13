import { iStarRailApi } from "./iStarRailApi";
import { base_url_yatta } from "./yatta/yatta";

export const StarRailApi = (): iStarRailApi => {
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

    const getReleaseChar = () => {
        const myHeaders = new Headers();
        const requestOptions: RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        return fetchAPIAsync(`avatar`, requestOptions);
    }

    return {
        getReleaseChar
    }
}