import { useEffect, useState } from "react";
import { RelicItensYattaResponse } from "../../../infra/api/iStarRailApi";
import { getRelicsList } from "../../../core/localStorage/localStorageDataManager";
import { RelicCard } from "./componets/relicCard";

type props = {
    _observer: number;
}

export const RelicIndex = ({ _observer }: props) => {
    const [_relicList, _setRelicList] = useState<RelicItensYattaResponse[]>([]);
    const getData = () => _setRelicList(getRelicsList().reverse());
    const [_4Pc, _set4Pc] = useState<boolean>(true);
    const [_2Pc, _set2Pc] = useState<boolean>(true);

    useEffect(() => {
        getData();
    }, [_observer]);

    return (
        <div className="container-fluid" style={{ minHeight: "75vh" }}>
            <div className="row justify-content-center px-2">
                <div className="col-12 mt-4 mb-3">
                    <h3 className="text-center mb-4">Relíquias</h3>
                    <div className="d-flex justify-content-center flex-wrap">
                        <button className={`btn  mt-2 mx-1 ` + (_2Pc ? 'btn-success' : 'btn-outline-secondary')} onClick={() => _set2Pc(prev => !prev)}>
                            Ornamentos
                        </button>
                        <button className={`btn  mt-2 mx-1 ` + (_4Pc ? 'btn-success' : 'btn-outline-secondary')} onClick={() => _set4Pc(prev => !prev)}>
                            Cavernas
                        </button>
                    </div>
                </div>
                <div className="col-12 mb-5">
                    <div className="row justify-content-center px-1">
                        {_relicList.map((relic, index) =>
                            <RelicCard r2pc={_2Pc} r4pc={_4Pc} relic={relic} key={`home-char-index-${index}`} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}