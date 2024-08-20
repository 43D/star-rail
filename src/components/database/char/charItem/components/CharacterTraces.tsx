import { useEffect, useState } from "react";
import { mainSkillType } from "../../../../../infra/api/iStarRailApi";

type props = {
    skillData: {
        [key: string]: mainSkillType;
    };
}

type AttributeMap = {
    type: string;
    name: string;
    acumulado: number;
}

export const CharacterTraces = ({ skillData }: props) => {
    const [attributes, setAttributes] = useState<AttributeMap[]>([]);

    useEffect(() => {
        const getIndex = (type: string) => map.findIndex((skill) => skill.type === type);

        const pushAcumulador = (index: number, value: number) => map[index].acumulado += value;

        const createObj = (type: string, name: string, value: number) => map.push({
            type: type,
            name: name,
            acumulado: value
        });

        const map: AttributeMap[] = [];
        const keys = Object.keys(skillData);
        keys.forEach((index) => {
            const data = skillData[index];
            if (data.pointType != "Attribute") return;
            const status = data.statusList
            if (!status) return;
            status.forEach((statusTrace) => {
                const indexParse = getIndex(statusTrace.icon);
                (indexParse < 0) ?
                    createObj(statusTrace.icon, data.name, (statusTrace.value * 100)) :
                    pushAcumulador(indexParse, (statusTrace.value * 100));
            });
        });

        setAttributes(map);
    }, []);

    return (<>
        <div className="col-12 col-md-6 col-lg-4 mt-2">
            <div className="card h-100">
                <div className="card-body">
                    <h5>Estatísticas em traços</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        {attributes.map((atr, index) =>
                            <div key={`list-atributte-key-${index}`}>
                                <div className="d-flex justify-content-center">
                                    <img style={{ height: `auto`, width: "2rem" }} src={`https://api.yatta.top/hsr/assets/UI/status/${atr.type}.png`} alt={atr.type} />
                                </div>
                                <p className="text-center mb-0">{(atr.type === "IconSpeed") ? (atr.acumulado / 100) : atr.acumulado}{(atr.type === "IconSpeed") ? "" : "%"}</p>
                                <p className="text-center">{atr.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>);
}