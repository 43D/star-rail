import { CharItensYattaResponse, LCItensYattaResponse, RelicItensYattaResponse } from "../../infra/api/iStarRailApi";

const getList = (id: string): any[] => {
    const charListString = localStorage.getItem(id);
    if (!charListString)
        return [];
    return JSON.parse(charListString);
};

export const setList = (list: any, id: string) => {
    const charListString = JSON.stringify(list);
    localStorage.setItem(id, charListString);
};

// ----------------------------------------------------------------------------------------------------------------------------------

export const getCharsList = (): CharItensYattaResponse[] => getList('chars');
export const getCharsIds = (): number[] => getList('charsIds');
export const getRelicsList = (): RelicItensYattaResponse[] => getList('relics');
export const getRelicsIds = (): number[] => getList('relicsIds');
export const getLCsList = (): LCItensYattaResponse[] => getList('lcs');
export const getLCsIds = (): number[] => getList('lcsIds');

export const setChars = (list: CharItensYattaResponse[]) => {
    setList(list, 'chars');
    setList(list.map((char) => Number(char.id)), 'charsIds');
};

export const setRelics = (list: RelicItensYattaResponse[]) => {
    setList(list, 'relics');
    setList(list.map((relic) => Number(relic.id)), 'relicsIds');
};

export const setLCs = (list: LCItensYattaResponse[]) => {
    setList(list, 'lcs');
    setList(list.map((lc) => Number(lc.id)), 'lcsIds');
};

// ----------------------------------------------------------------------------------------------------------------------------------
// BETA DATA

export const getCharsBetaList = (): CharItensYattaResponse[] => getList('charsBeta');
export const getCharsBetaIds = (): number[] => getList('charsBetaIds');
export const getRelicsBetaList = (): RelicItensYattaResponse[] => getList('relicsBeta');
export const getRelicsBetaIds = (): number[] => getList('relicsBetaIds');
export const getLCsBetaList = (): LCItensYattaResponse[] => getList('lcsBeta');
export const getLCsBetaIds = (): number[] => getList('lcsBetaIds');

export const setCharsBeta = (list: CharItensYattaResponse[]) => {
    setList(list, 'charsBeta');
    setList(list.map((char) => Number(char.id)), 'charsBetaIds');
};

export const setRelicsBeta = (list: RelicItensYattaResponse[]) => {
    setList(list, 'relicsBeta');
    setList(list.map((relic) => Number(relic.id)), 'relicsBetaIds');
};

export const setLCsBeta = (list: LCItensYattaResponse[]) => {
    setList(list, 'lcsBeta');
    setList(list.map((lc) => Number(lc.id)), 'lcsBetaIds');
};