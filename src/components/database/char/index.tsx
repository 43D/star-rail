import { useEffect, useState } from "react";
import { CharItensYattaResponse } from "../../../infra/api/iStarRailApi";
import { getCharList } from "../../../core/localStorage/localStorageDataManager";
import { getMCIdList, getStringGender } from "../../../core/util/GenderManipulator";

type props = {
    _observer: number;
}

export const CharacterIndex = ({ _observer }: props) => {
    const [_charList, _setCharList] = useState<CharItensYattaResponse[]>([]);
    const getData = () => _setCharList(getCharList());
    const validateId = (id: number) => (id > 8000 && getMCIdList().includes(id)) || id < 8000;

    const sortedCharList = () => _charList.sort((char1, char2) => {
        const nomeA = char1.name.toLowerCase();
        const nomeB = char2.name.toLowerCase();
        return (nomeA < nomeB) ? -1 : (nomeA > nomeB) ? 1 : 0;
    });


    useEffect(() => {
        getData();
    }, [_observer]);


    return (<>
        <div className="row justify-content-center px-2">
            <div className="col-12 px-2 mb-3 mt-2">
                <h4>Personagens</h4>
                <p>filter_list</p>
            </div>

            {sortedCharList().map((char, index) =>
                validateId(Number(char.id)) &&
                <div className="p-1 card-char" key={`home-char-index-${index}`}>
                    <div className={`card  h-100 bg-t${char.rank}`} >
                        <img src={`https://api.yatta.top/hsr/assets/UI//avatar/medium/${char.icon}.png`} className="card-img-top" alt={char.name} />
                        <div className="card-body d-flex justify-content-center align-items-center flex-column px-0 pt-2 pb-1 rounded-bottom">
                            <p className="card-title text-center mb-0">{getStringGender(char.name)}</p>
                            <div className="w-100 d-flex align-items-center justify-content-center">
                                <img src={`https://api.yatta.top/hsr/assets/UI//attribute/IconAttribute${char.types.combatType}.png`} className="me-1" alt={char.name} style={{ width: "auto", height: "3rem" }} />
                                <img src={`https://api.yatta.top/hsr/assets/UI//profession/IconProfession${char.types.pathType}Small.png`} className="ms-1" alt={char.name} style={{ width: "auto", height: "2.5rem" }} />
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    </>)
}