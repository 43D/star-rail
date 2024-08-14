import { useEffect, useState } from "react";
import { LCItensYattaResponse } from "../../../infra/api/iStarRailApi";
import { getLCList } from "../../../core/localStorage/localStorageDataManager";
import { useNavigate } from "react-router-dom";

type props = {
    _observer: number;
}

export const LCIndex = ({ _observer }: props) => {
    const navigate = useNavigate();
    const [_lcList, _setLcList] = useState<LCItensYattaResponse[]>([]);
    const getData = () => _setLcList(getLCList());

    useEffect(() => {
        getData();
    }, [_observer]);

    return (<>
        <div className="row justify-content-center px-2">
            <div className="col-12 px-2 mb-3 mt-2">
                <h4>Cone de Luz</h4>
                <p>filter_list</p>
            </div>

            {_lcList.reverse().map((char, index) =>
                <div className="p-1 card-char" key={`home-lc-index-${index}`}>
                    <div className={`card h-100 bg-t${char.rank}`}  onClick={() => navigate(`/lc/${char.id}`)} style={{ cursor: 'pointer' }} >
                        <img src={`https://api.yatta.top/hsr/assets/UI//equipment/medium/${char.icon}.png`} className="card-img-top" alt={char.name} />
                        <div className="card-body d-flex justify-content-center align-items-center flex-column px-0 pt-2 pb-1 rounded-bottom">
                            <p className="card-title text-center mb-0">{char.name}</p>
                            <div className="w-100 d-flex align-items-center justify-content-center">
                                <img src={`https://api.yatta.top/hsr/assets/UI//profession/IconProfession${char.types.pathType}Small.png`} className="ms-1" alt={char.types.pathType} style={{ width: "auto", height: "2.5rem" }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>)
}