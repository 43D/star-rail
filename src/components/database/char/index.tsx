import { useEffect, useState } from "react";
import { CharItensYattaResponse, combatType, pathType, RankChar } from "../../../infra/api/iStarRailApi";
import { getCharsList } from "../../../core/localStorage/localStorageDataManager";
import { getMCIdList, getStringGender } from "../../../core/util/GenderManipulator";
import { useNavigate } from "react-router-dom";

type props = {
    _observer: number;
}

export const CharacterIndex = ({ _observer }: props) => {
    const navigate = useNavigate();
    const [_charList, _setCharList] = useState<CharItensYattaResponse[]>([]);
    const getData = () => _setCharList(getCharsList());
    const validateId = (id: number) => (id > 8000 && getMCIdList().includes(id)) || id < 8000;

    const [_isFiltered, _setFiltered] = useState<boolean>(false);
    const [_filterPath, _setFilterPath] = useState<pathType[]>([]);
    const [_filterCombat, _setFilterCombat] = useState<combatType[]>([]);
    const [_filterRank, _setFilterRank] = useState<RankChar[]>([]);

    const toggleFilterPath = (path: pathType) =>
        _setFilterPath(prev => !prev.includes(path) ? [...prev, path] : prev.filter((v) => v != path));

    const toggleFilterCombat = (combat: combatType) =>
        _setFilterCombat(prev => !prev.includes(combat) ? [...prev, combat] : prev.filter((v) => v != combat));

    const toggleFilterRank = (rank: RankChar) =>
        _setFilterRank(prev => !prev.includes(rank) ? [...prev, rank] : prev.filter((v) => v != rank));

    const sortedCharList = (list: CharItensYattaResponse[]) =>
        list.sort((char1, char2) => {
            const nomeA = char1.name.toLowerCase();
            const nomeB = char2.name.toLowerCase();
            return (nomeA < nomeB) ? -1 : (nomeA > nomeB) ? 1 : 0;
        });

    const getListFiltered = () => {
        let list = _charList;

        if (_filterPath.length > 0)
            list = list.filter((char) => _filterPath.includes(char.types.pathType));

        if (_filterCombat.length > 0)
            list = list.filter((char) => _filterCombat.includes(char.types.combatType));

        if (_filterRank.length > 0)
            list = list.filter((char) => _filterRank.includes(char.rank));

        return list;
    }

    const getList = () => (_isFiltered) ? sortedCharList(getListFiltered()) : sortedCharList(_charList);

    useEffect(() => {
        getData();
    }, [_observer]);

    useEffect(() => {
        _setFiltered((_filterPath.length > 0 || _filterCombat.length > 0 || _filterRank.length > 0));
    }, [_filterPath, _filterCombat, _filterRank]);

    const getButtonPath = (path: pathType) => (
        <button className={`btn  mt-2 mx-1 ` + ((_filterPath.includes(path)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterPath(path)}>
            <img style={{ maxWidth: `2rem`, height: `auto` }} src={`https://api.yatta.top/hsr/assets/UI//profession/IconProfession${path}Small.png`} alt={path} />
        </button>
    )

    const getButtonCombat = (combat: combatType) => (
        <button className={`btn mt-2 mx-1 ` + ((_filterCombat.includes(combat)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterCombat(combat)}>
            <img style={{ maxWidth: `2rem`, height: `auto` }} src={`https://api.yatta.top/hsr/assets/UI//attribute/IconAttribute${combat}.png`} alt={combat} />
        </button>
    )

    const clearFilter = () => {
        _setFilterCombat([]);
        _setFilterPath([]);
        _setFilterRank([]);
    }

    return (<>
        <div className="row justify-content-center px-2">
            <div className="col-12 mb-3 mt-4">
                <h3 className="text-center mb-4">Personagens</h3>
                <div className="d-flex justify-content-center flex-wrap">
                    {getButtonCombat(`Fire`)}
                    {getButtonCombat(`Ice`)}
                    {getButtonCombat(`Imaginary`)}
                    {getButtonCombat(`Physical`)}
                    {getButtonCombat(`Quantum`)}
                    {getButtonCombat(`Thunder`)}
                    {getButtonCombat(`Wind`)}
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                    {getButtonPath(`Warrior`)}
                    {getButtonPath(`Rogue`)}
                    {getButtonPath(`Mage`)}
                    {getButtonPath(`Shaman`)}
                    {getButtonPath(`Warlock`)}
                    {getButtonPath(`Knight`)}
                    {getButtonPath(`Priest`)}
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                    <button className={'btn mt-2 mx-1  ' + ((_filterRank.includes(5)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterRank(5)}>
                        <img style={{ maxWidth: `2rem`, height: `auto` }} src="https://static.wikia.nocookie.net/houkai-star-rail/images/2/2b/Icon_5_Stars.png" alt={"Rank_5"} />
                    </button>
                    <button className={'btn mt-2 mx-1  ' + ((_filterRank.includes(4)) ? 'btn-success' : 'btn-outline-secondary')} onClick={() => toggleFilterRank(4)}>
                        <img style={{ maxWidth: `2rem`, height: `auto` }} src="https://static.wikia.nocookie.net/houkai-star-rail/images/7/77/Icon_4_Stars.png/" alt={"Rank_4"} />
                    </button>
                    {_isFiltered &&
                        <button className={`btn btn-outline-danger mx-1 mt-2`} onClick={clearFilter}>
                            Limpar Filtros
                        </button>
                    }
                </div>
            </div>

            {getList().map((char, index) =>
                validateId(Number(char.id)) &&
                <div className="p-1 card-char" key={`home-char-index-${index}`}>
                    <div className={`card  h-100 bg-t${char.rank}`} onClick={() => navigate(`/character/${char.id}`)} style={{ cursor: 'pointer' }}>
                        <img src={`https://api.yatta.top/hsr/assets/UI//avatar/medium/${char.icon}.png`} className="card-img-top" alt={char.name} />
                        <div className="card-body d-flex justify-content-center align-items-center flex-column px-0 pt-2 pb-1 rounded-bottom">
                            <p className="card-title text-center mb-0">{getStringGender(char.name)}</p>
                            <div className="w-100 d-flex align-items-center justify-content-center">
                                <img src={`https://api.yatta.top/hsr/assets/UI//attribute/IconAttribute${char.types.combatType}.png`} className="me-1" alt={char.types.combatType} style={{ width: "auto", height: "3rem" }} />
                                <img src={`https://api.yatta.top/hsr/assets/UI//profession/IconProfession${char.types.pathType}Small.png`} className="ms-1" alt={char.types.pathType} style={{ width: "auto", height: "2.5rem" }} />
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    </>)
}