import { CharItensYattaResponse, LCItensYattaResponse, RelicItensYattaResponse } from "../../infra/api/iStarRailApi";

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

export const setRelicList = (list: RelicItensYattaResponse[]) => {
    const charListString = JSON.stringify(list);
    localStorage.setItem('relics', charListString);
};

export const getRelicList = (): RelicItensYattaResponse[] => {
    const charListString = localStorage.getItem('relics');
    if (!charListString)
        return [];
    return JSON.parse(charListString);
};

export const setLCList = (list: LCItensYattaResponse[]) => {
    const charListString = JSON.stringify(list);
    localStorage.setItem('lcs', charListString);
};

export const getLCList = (): LCItensYattaResponse[] => {
    const charListString = localStorage.getItem('lcs');
    if (!charListString)
        return [];
    return JSON.parse(charListString);
};