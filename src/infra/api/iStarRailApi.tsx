type pathType = `Knight` | `Rogue` | `Mage` | `Warlock` | `Priest` | `Warrior` | `Shaman`;
type combatType = `Ice` | `Physical` | `Fire` | `Wind` | `Thunder` | `Quantum` | `Imaginary`;

export type CharItensYattaResponse = {
    id: string;
    name: string;
    rank: number;
    types: {
        pathType: pathType;
        combatType: combatType;
    };
    icon: string;
    release: number;
    route: string;
}

export type RelicItensYattaResponse = {
    id: string;
    name: string;
    icon: string;
    isPlanarSuit: boolean;
    levelList: number[];
    route: string;
}

export type LCItensYattaResponse = {
    id: string;
    name: string;
    rank: number;
    types: {
        pathType: pathType;
    };
    icon: string;
    isSellable: boolean;
    route: string;
}

type CharYattaResponse = {
    response: number;
    data: {
        items: {
            [key: string]: CharItensYattaResponse;
        }
    }
}

type RelicYattaResponse = {
    response: number;
    data: {
        items: {
            [key: string]: RelicItensYattaResponse;
        }
    }
}

type LCYattaResponse = {
    response: number;
    data: {
        items: {
            [key: string]: LCItensYattaResponse;
        }
    }
}

export type iYattaStarRailApi = {
    getReleaseChar: () => Promise<CharYattaResponse>;
    getReleaseRelics: () => Promise<RelicYattaResponse>; // https://api.yatta.top/hsr/v2/pt/relic
    getReleaseLC: () => Promise<LCYattaResponse>; //https://api.yatta.top/hsr/v2/en/equipment 
}