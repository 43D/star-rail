import { useEffect, useState } from "react";
import { RelicItensYattaResponse } from "../../../infra/api/iStarRailApi";
import { getRelicList } from "../../../core/localStorage/localStorageDataManager";
import { getStringGender } from "../../../core/util/GenderManipulator";
import { useNavigate } from "react-router-dom";

type props = {
    _observer: number;
}

export const RelicIndex = ({ _observer }: props) => {
    const navigate = useNavigate();
    const [_relicList, _setRelicList] = useState<RelicItensYattaResponse[]>([]);
    const getData = () => _setRelicList(getRelicList());

    useEffect(() => {
        getData();
    }, [_observer]);

    return (<>
        <div className="row justify-content-center px-2">
            <div className="col-12 px-2 mb-3 mt-2">
                <h4>Reliquias</h4>
                <p>filter_list</p>
            </div>
            <h5>Relics</h5>
            {_relicList.reverse().map((char, index) =>
                !char.isPlanarSuit &&
                <div className="p-1 card-char" key={`home-char-index-${index}`}>
                    <div className={`card h-100 bg-t${char.levelList.reduce((maior, atual) => Math.max(maior, atual), - Infinity)}`} onClick={() => navigate(`/relic/${char.id}`)} style={{ cursor: 'pointer' }}>
                        <img src={`https://api.yatta.top/hsr/assets/UI//relic/${char.icon}.png`} className="card-img-top" alt={char.name} />
                        <div className="card-body d-flex justify-content-center align-items-center flex-column px-0 pt-2 pb-1 rounded-bottom">
                            <p className="card-title text-center mb-0">{getStringGender(char.name)}</p>
                        </div>
                    </div>
                </div>

            )}
            <hr />
            {_relicList.reverse().map((char, index) =>
                char.isPlanarSuit &&
                <div className="p-1 card-char" key={`home-char-index-${index}`}>
                    <div className={`card h-100 bg-t${char.levelList.reduce((maior, atual) => Math.max(maior, atual), - Infinity)}`} >
                        <img src={`https://api.yatta.top/hsr/assets/UI//relic/${char.icon}.png`} className="card-img-top" alt={char.name} />
                        <div className="card-body d-flex justify-content-center align-items-center flex-column px-0 pt-2 pb-1 rounded-bottom">
                            <p className="card-title text-center mb-0">{getStringGender(char.name)}</p>
                        </div>
                    </div>
                </div>

            )}
        </div>
    </>)
}