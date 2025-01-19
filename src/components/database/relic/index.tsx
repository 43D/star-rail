import { useEffect, useState } from "react";
import { RelicHakusResponse, RelicItensYattaResponse } from "../../../infra/api/iStarRailApi";
import { getRelicsBetaIds, getRelicsBetaList, getRelicsList } from "../../../core/localStorage/localStorageDataManager";
import { RelicCard } from "./componets/relicCard";
import { getBetaContent } from "../../../core/localStorage/localStorageManager";
import { RelicBetaCard } from "./componets/relicBetaCard";

type props = {
    _observer: number;
}

export const RelicIndex = ({ _observer }: props) => {
    const _betaUnlock = getBetaContent();
    const [_relicList, _setRelicList] = useState<RelicItensYattaResponse[]>([]);
    const [_relicBetaList, _setRelicBetaList] = useState<RelicHakusResponse>();
    const getData = () => _setRelicList(getRelicsList().reverse());
    const getBetaData = () => _setRelicBetaList(getRelicsBetaList());

    const [_4Pc, _set4Pc] = useState<boolean>(true);
    const [_2Pc, _set2Pc] = useState<boolean>(true);

    useEffect(() => {
        if (_betaUnlock)
            getBetaData();
        getData();
    }, [_observer]);


    // getRelicList
    
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
                        {(_betaUnlock && _relicBetaList !== undefined) && <>
                            {getRelicsBetaIds().map((id) =>
                                <RelicBetaCard r2pc={_2Pc} r4pc={_4Pc} id={id} relic={_relicBetaList[id]} key={`home-char-beta-index-${id}`} />
                            )}
                        </>}

                        {_relicList.map((relic) =>
                            <RelicCard r2pc={_2Pc} r4pc={_4Pc} relic={relic} key={`home-char-index-${relic.id}`} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}