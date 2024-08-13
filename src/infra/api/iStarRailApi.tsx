type pathType = `Knight` | `Rogue` | `Mage` | `Warlock` | `Priest` | `Warrior` | `Shaman`;
type combatType = `Ice` | `Physical` | `Fire` | `Wind` | `Thunder` | `Quantum` | `Imaginary`;

export type CharItensYattaResponse = {
    id: string,
    name: string;
    rank: number;
    types: {
        pathType: pathType;
        combatType: combatType;
    },
    icon: string;
    release: number;
    route: string;
}

type CharYattaResponse = {
    response: number;
    data: {
        items: {
            [key: string] : CharItensYattaResponse
        }
    }
}

export type iStarRailApi = {
    getReleaseChar: () => Promise<CharYattaResponse>;
}