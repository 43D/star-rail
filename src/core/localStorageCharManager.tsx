import { CharItensYattaResponse } from "../infra/api/iStarRailApi";

export const setCharList = (list: CharItensYattaResponse[]) => {
    const charListString = JSON.stringify(list);
    localStorage.setItem('chars', charListString);
};

export const getCharList = (): CharItensYattaResponse[] => {
    const charListString = localStorage.getItem('chars');
    if (!charListString)
        return [];
    return JSON.parse(charListString);
};