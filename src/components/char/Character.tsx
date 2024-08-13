import { useEffect, useState } from "react";
import { CharItensYattaResponse } from "../../infra/api/iStarRailApi";
import { getCharList } from "../../core/localStorage/localStorageCharManager";
import { getMCIdList, getStringGender } from "../../core/util/GenderManipulator";

type props = {
    _observer: number;
}

export const CharacterIndex = ({ _observer }: props) => {
    const [_charList, _setCharList] = useState<CharItensYattaResponse[]>([]);
    const getData = () => _setCharList(getCharList());
    const validateId = (id: number) => (id > 8000 && getMCIdList().includes(id)) || id < 8000;

    useEffect(() => {
        getData();
    }, [_observer]);


    return (<>
        <div className="row justify-content-center px-2">
            <div className="col-12 px-2 mb-3 mt-2">
                <h4>Personagens</h4>
                <p>filter_list</p>
            </div>

            {_charList.map((char, index) =>
                validateId(Number(char.id)) &&
                <div className="p-1 card-char" key={`home-char-index-${index}`}>
                    <div className="card" >
                        <img src={`https://api.yatta.top/hsr/assets/UI//avatar/medium/${char.icon}.png`} className="card-img-top" alt={char.name} />
                        <div className="card-body d-flex justify-content-center align-items-center flex-column px-0 pt-0 pb-2">
                            <p className="card-title text-center">{getStringGender(char.name)}</p>
                        </div>
                    </div>
                </div>

            )}
        </div>
    </>)
}