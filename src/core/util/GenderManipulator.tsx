import { getMCGender } from "../localStorage/localStorageManager"

export const getMCIdList = () => (getMCGender() === "F") ? [8002, 8004, 8006] : [8001, 8003, 8005];

export const getStringGender = (name: string) => {
    const gender = getMCGender();

    const match = (gender === "F") ? name.match(/\{F#(.*?)\}/) : name.match(/\{M#(.*?)\}/);

    if (!match) return name;

    const nameParse = name.replace(/\{F#.*?\}/g, '').replace(/\{M#.*?\}/g, '');
    return `${nameParse}${match[1]}`;
}
