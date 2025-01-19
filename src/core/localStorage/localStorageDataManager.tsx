import { CharHakushResponse, CharItensYattaResponse, LCHakusResponse, LCItensYattaResponse, RelicHakusResponse, RelicItensYattaResponse } from "../../infra/api/iStarRailApi";

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

export const getCharsBetaList = (): CharHakushResponse => getList('charsBeta');
export const getCharsBetaIds = (): number[] => getList('charsBetaIds');
export const getRelicsBetaList = (): RelicHakusResponse => getList('relicsBeta');
export const getRelicsBetaIds = (): number[] => getList('relicsBetaIds');
export const getLCsBetaList = (): LCHakusResponse => getList('lcsBeta');
export const getLCsBetaIds = (): number[] => getList('lcsBetaIds');

export const setCharsBeta = (listId: number[], list: CharHakushResponse) => {
    setList(list, 'charsBeta');
    setList(listId, 'charsBetaIds');
};

export const setRelicsBeta = (listId: number[], list: RelicHakusResponse) => {
    setList(list, 'relicsBeta');
    setList(listId, 'relicsBetaIds');
};

export const setLCsBeta = (listId: number[], list: LCHakusResponse) => {
    setList(list, 'lcsBeta');
    setList(listId, 'lcsBetaIds');
};