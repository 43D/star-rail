import { useEffect, useState } from "react";
import { LCItensYattaResponse, pathType, RankLC } from "../../../infra/api/iStarRailApi";
import { getLCList } from "../../../core/localStorage/localStorageDataManager";
import { useNavigate } from "react-router-dom";

type props = {
    _observer: number;
}

export const LCIndex = ({ _observer }: props) => {
    const navigate = useNavigate();
    const [_lcList, _setLcList] = useState<LCItensYattaResponse[]>([]);
    const getData = () => _setLcList(getLCList().reverse());
    const [_filterPath, _setFilterPath] = useState<pathType[]>([]);
    const [_filterRank, _setFilterRank] = useState<RankLC[]>([]);

    const toggleFilterPath = (path: pathType) =>
        _setFilterPath(prev => !prev.includes(path) ? [...prev, path] : prev.filter((v) => v != path));

    const toggleFilterRank = (rank: RankLC) =>
        _setFilterRank(prev => !prev.includes(rank) ? [...prev, rank] : prev.filter((v) => v != rank));

    const getListFiltered = () => {
        let list = _lcList;

        if (_filterPath.length > 0)
            list = list.filter((lc) => _filterPath.includes(lc.types.pathType));

        if (_filterRank.length > 0)
            list = list.filter((lc) => _filterRank.includes(lc.rank));

        return list;
    }

    const getList = () => (_filterPath.length > 0 || _filterRank.length > 0) ? getListFiltered() : _lcList;

    useEffect(() => {
        getData();
    }, [_observer]);

    const getButtonPath = (path: pathType) => (
        <button className={`btn  mt-2 mx-1 ` + ((_filterPath.includes(path)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterPath(path)}>
            <img style={{ maxWidth: `2rem`, height: `auto` }} src={`https://api.yatta.top/hsr/assets/UI//profession/IconProfession${path}Small.png`} alt={path} />
        </button>
    )

    const clearFilters = () => {
        _setFilterPath([]);
        _setFilterRank([]);
    }

    return (<>
        <div className="row justify-content-center px-2">
            <div className="col-12 mb-3 mt-4">
                <h3 className="text-center mb-4">Cone de Luz</h3>
                <div className="d-flex justify-content-center flex-wrap">
                    {getButtonPath(`Knight`)}
                    {getButtonPath(`Mage`)}
                    {getButtonPath(`Priest`)}
                    {getButtonPath(`Rogue`)}
                    {getButtonPath(`Shaman`)}
                    {getButtonPath(`Warlock`)}
                    {getButtonPath(`Warrior`)}
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                    <button className={'btn mt-2 mx-1  ' + ((_filterRank.includes(5)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterRank(5)}>
                        <img style={{ maxWidth: `2rem`, height: `auto` }} src="https://static.wikia.nocookie.net/houkai-star-rail/images/2/2b/Icon_5_Stars.png" alt={"Rank_5"} />
                    </button>
                    <button className={'btn mt-2 mx-1  ' + ((_filterRank.includes(4)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterRank(4)}>
                        <img style={{ maxWidth: `2rem`, height: `auto` }} src="https://static.wikia.nocookie.net/houkai-star-rail/images/7/77/Icon_4_Stars.png/" alt={"Rank_4"} />
                    </button>
                    <button className={'btn mt-2 mx-1  ' + ((_filterRank.includes(3)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterRank(3)}>
                        <img style={{ maxWidth: `2rem`, height: `auto` }} src="https://static.wikia.nocookie.net/houkai-star-rail/images/1/11/Icon_3_Stars.png/" alt={"Rank_3"} />
                    </button>
                    {(_filterPath.length > 0 || _filterRank.length > 0) &&
                        <button className={`btn btn-outline-danger mx-1 mt-2`} onClick={clearFilters}>
                            Limpar Filtros
                        </button>
                    }
                </div>
            </div>

            {getList().map((char, index) =>
                <div className="p-1 card-char" key={`home-lc-index-${index}`}>
                    <div className={`card h-100 bg-t${char.rank}`} onClick={() => navigate(`/lc/${char.id}`)} style={{ cursor: 'pointer' }} >
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