import { useEffect, useState } from "react";
import { upgradeMathType } from "../../../../../infra/api/iStarRailApi";

type props = {
    charData: upgradeMathType[];
}

const lvlMap: { [key: number]: { name: string, indice: number } } = {
    0: { name: "0", indice: 0 },
    1: { name: "20", indice: 0 },
    2: { name: "20+", indice: 1 },
    3: { name: "30", indice: 1 },
    4: { name: "30+", indice: 2 },
    5: { name: "40", indice: 2 },
    6: { name: "40+", indice: 3 },
    7: { name: "50", indice: 3 },
    8: { name: "50+", indice: 4 },
    9: { name: "60", indice: 4 },
    10: { name: "60+", indice: 5 },
    11: { name: "70", indice: 5 },
    12: { name: "70+", indice: 6 },
    13: { name: "80", indice: 6 }
}

export const CharacterStats = ({ charData }: props) => {
    const [lvl, setLvl] = useState<number>(13)
    const [atq, setAtq] = useState<number>(0)
    const [def, setDef] = useState<number>(0)
    const [hp, setHp] = useState<number>(0)
    const onChangeLvl = (event: React.ChangeEvent<HTMLInputElement>) => setLvl(Number(event.target.value));

    const getCacls = () => {
        const index = lvlMap[lvl].indice;
        const base = charData[index];
        const max = (lvl % 2) === 1;
        const levelBase = (((index + 1) * 10) + ((max) ? 10 : 0) - ((!max && index === 0) ? 9 : 0)) - 1;
        let attackBase = base.skillBase.attackBase + (levelBase * base.skillAdd.attackAdd);
        let defenceBase = base.skillBase.defenceBase + (levelBase * base.skillAdd.defenceAdd);
        let hPBase = base.skillBase.hPBase + (levelBase * base.skillAdd.hPAdd);
        setAtq(Math.trunc(attackBase));
        setDef(Math.trunc(defenceBase));
        setHp(Math.trunc(hPBase));
    }

    useEffect(() => {
        getCacls();
    }, [lvl]);

    return (<>
        <div className="col-12 col-md-6 col-lg-4 mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                        <label htmlFor="levelRange" className="form-label mb-0" style={{ minWidth: "75px" }}>Level {lvlMap[lvl].name}</label>
                        <input type="range" className="form-range" min="0" max="13" step="1" value={lvl} id="levelRange" onChange={onChangeLvl} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="w-50 px-2">
                            <div className="d-flex justify-content-between border-bottom">
                                <p className="mb-0 mt-1">Ataque base</p>
                                <p className="mb-0 mt-1">{atq}</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom">
                                <p className="mb-0 mt-1">Defesa base</p>
                                <p className="mb-0 mt-1">{def}</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom">
                                <p className="mb-0 mt-1">Vida base</p>
                                <p className="mb-0 mt-1">{hp}</p>
                            </div>
                        </div>
                        <div className="w-50 px-2">
                            <div className="d-flex justify-content-between border-bottom">
                                <p className="mb-0 mt-1">Velocidade base</p>
                                <p className="mb-0 mt-1">{charData[0].skillBase.speedBase}</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom">
                                <p className="mb-0 mt-1">Aggro</p>
                                <p className="mb-0 mt-1">{charData[0].skillBase.baseAggro}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}