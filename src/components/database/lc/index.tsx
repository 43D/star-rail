import { useEffect, useState } from "react";
import { LCItensYattaResponse, pathType } from "../../../infra/api/iStarRailApi";
import { getLCsList } from "../../../core/localStorage/localStorageDataManager";
import { useNavigate } from "react-router-dom";

type props = {
    _observer: number;
}

export const LCIndex = ({ _observer }: props) => {
    const navigate = useNavigate();
    const [_lcList, _setLcList] = useState<LCItensYattaResponse[]>([]);
    const getData = () => _setLcList(getLCsList().reverse());
    const [_filterPath, _setFilterPath] = useState<pathType[]>([]);

    const toggleFilterPath = (path: pathType) =>
        _setFilterPath(prev => !prev.includes(path) ? [...prev, path] : prev.filter((v) => v != path));

    const getListFiltered = () => _lcList.filter((char) => _filterPath.includes(char.types.pathType));

    const getList = () => (_filterPath.length > 0) ? getListFiltered() : _lcList;

    useEffect(() => {
        getData();
    }, [_observer]);

    const getButtonPath = (path: pathType) => (
        <button className={`btn  mt-2 mx-1 ` + ((_filterPath.includes(path)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterPath(path)}>
            <img style={{ maxWidth: `2rem`, height: `auto` }} src={`https://api.yatta.top/hsr/assets/UI//profession/IconProfession${path}Small.png`} alt={path} />
        </button>
    )

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
                    {_filterPath.length > 0 &&
                        <button className={`btn btn-outline-danger mx-1 mt-2`} onClick={() => _setFilterPath([])}>
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