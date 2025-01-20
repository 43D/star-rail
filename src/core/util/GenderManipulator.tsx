import { getMCGender } from "../localStorage/localStorageManager"

export const getMCIdList = () => (getMCGender() === "F") ? [8002, 8004, 8006, 8008] : [8001, 8003, 8005, 8007];

export const getStringGender = (name: string) => {
    const gender = getMCGender();

    const match = (gender === "F") ? name.match(/\{F#(.*?)\}/) : name.match(/\{M#(.*?)\}/);

    if (!match) return name;

    return (gender === "F") ? name.replace(/\{F#.*?\}/g, match[1]).replace(/\{M#.*?\}/g, '') : name.replace(/\{F#.*?\}/g, '').replace(/\{M#.*?\}/g, match[1]);
}
