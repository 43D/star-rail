import { useParams } from "react-router-dom";
import { getCharsBetaIds, getCharsIds } from "../../../../core/localStorage/localStorageDataManager";
import { NotFound } from "../../../NotFound";
import { CSSProperties, useEffect, useState } from "react";
import useWindowDimensions from "../../../../core/util/getWindowsDimension";
import { getCoverCharTheme } from "../../../../core/localStorage/localStorageManager";
import { CharByIdItensYattaResponse, combatType, iYattaStarRailApi, pathType } from "../../../../infra/api/iStarRailApi";
import { CharacterStats } from "./components/CharacterStats";
import { CharacterTraces } from "./components/CharacterTraces";
import { CharacterSkill } from "./components/CharacterSkill";
import { HTMLParagraphConvertEidolons } from "../../../../core/util/HTMLManipulator/HTMLParagraphConvertEidolons";
import { getRankImg } from "../../../../core/util/getRankURLImage";
import { TraceSkill } from "./components/TraceSkill";

type props = {
    _observer: number;
    apiYatta: iYattaStarRailApi;
}

export const CharacterItemIndex = ({ _observer, apiYatta }: props) => {
    const { id } = useParams<string>();
    const ids = getCharsIds();
    const betaIds = getCharsBetaIds();
    if (!id)
        return <NotFound />
    if (!(ids.includes(Number(id)) || betaIds.includes(Number(id))))
        return <NotFound />

    const [path, setPath] = useState<pathType | "">(``);
    const [combat, setCombat] = useState<combatType | "">(``);
    const [alturaMax, setAlturaMax] = useState<number>(137);
    const [alturaMin, setAlturaMin] = useState<number>(190);
    const [profileOpen, setProfileOpen] = useState<boolean>(false);
    const [mainSkillsId, setMainSkillsId] = useState<string[]>([]);
    const [traceSkillsId, setTraceSkillsId] = useState<string[]>([]);
    const [charData, setCharData] = useState<CharByIdItensYattaResponse>();
    const { height, width } = useWindowDimensions();
    const themeCover = getCoverCharTheme();
    const mainImage = `https://api.yatta.top/hsr/assets/UI/avatar/large/${id}.png`;

    useEffect(() => {
        getData();
    }, [_observer, id]);

    const getData = async () => {
        setCharData(undefined);
        const res = await apiYatta.getReleaseCharById(id);
        setPath(res.data.types.pathType.id);
        setCombat(res.data.types.combatType.id);
        setCharData(res.data);
        setMainSkillsId(Object.keys(res.data.traces.mainSkills));
        setTraceSkillsId(
            Object.keys(res.data.traces.subSkills)
                .filter((id) => res.data.traces.subSkills[id].pointType === "Special")
                .map((id) => id)
        );
        setAlturaMax(137 + (res.data.fetter.description ? 190 : 0) + (res.data.fetter.cv ? 180 : 0));
        setAlturaMin((!res.data.fetter.description && !res.data.fetter.cv) ? 137 : 190)
    }

    const style: CSSProperties = {
        paddingTop: (height / width) > 0.77 ? `100vw` : `calc( 90vh - ${(profileOpen) ? alturaMax : alturaMin}px)`,
        backgroundImage: `url("${mainImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: `contain`,
        backgroundPositionX: `right`,
        backgroundPositionY: `64px`,
        zIndex: `999`
    }

    const getBackgroundCoverTheme = () => {
        const styleMain: CSSProperties = {
            ...style,
            paddingTop: `0px`,
            filter: `blur(100px)`,
            transform: `scale(2)`,
            backgroundPositionX: `80%`,
            height: `100vh`,
            width: `100vw`,
            overflow: "hidden",
            position: "fixed",
            zIndex: `-10`
        }
        if (themeCover === "PALETTE")
            return styleMain;

        if (themeCover === "PATH")
            return {
                ...styleMain,
                backgroundImage:
                    (combat != "") ?
                        `url("https://api.yatta.top/hsr/assets/UI//attribute/IconAttribute${combat}.png")`
                        : `url("${mainImage}")`,
                transform: `scale(2.5)`
            }

        if (themeCover === "RANK")
            return {
                ...styleMain,
                backgroundImage: `unset`,
                background: (charData?.rank === 5) ? 'background: linear-gradient(180deg, rgba(227, 179, 119, 1) 0%, rgba(219, 149, 63, 1) 10%, rgba(175, 143, 104, 1) 100%)' : 'linear-gradient(180deg, rgba(154, 114, 222, 1) 0%, rgba(89, 28, 191, 1) 36%, rgba(66, 20, 144, 1) 100%)',
                backgroundColor: (charData?.rank === 5) ? '#f28f15' : '#591cbf'
            } as CSSProperties;

        return {
            ...styleMain,
            backgroundImage: `unset`
        }
    }

    return (<>
        {charData &&
            <div style={{ ...getBackgroundCoverTheme() }}>
            </div>
        }
        <div style={{ ...style }}>
            {charData &&
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-1" style={{ maxWidth: (height / width) > 0.77 ? `100vw` : '30rem' }}>
                                <div className="card-body">
                                    <h1 className="mb-0">{charData.name}</h1>
                                    <h6>{charData.fetter.faction ? charData.fetter.faction : "???"}</h6>
                                    <div className="d-flex align-items-center">
                                        <img style={{ maxWidth: `2rem`, height: `auto` }} src={`https://api.yatta.top/hsr/assets/UI//attribute/IconAttribute${combat}.png`} alt={combat} />
                                        <img className="mx-2" style={{ maxWidth: `1.8rem`, height: `auto` }} src={`https://api.yatta.top/hsr/assets/UI//profession/IconProfession${path}Small.png`} alt={path} />
                                        <img style={{ width: `auto`, height: `1.2rem` }} src={getRankImg(charData.rank)} alt={`rank_${charData.rank}`} />
                                    </div>
                                </div>
                            </div>
                            {(charData.fetter.description || charData.fetter.cv) &&
                                <div className="accordion mb-2" id="profileColapse" style={{ maxWidth: (height / width) > 0.77 ? `100vw` : '30rem' }}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => setProfileOpen(prev => !prev)}>
                                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#profile"
                                                aria-expanded="false" aria-controls="profile">
                                                {charData.fetter.description && <>Introdução</>}
                                                {(charData.fetter.description && charData.fetter.cv) && <> & </>}
                                                {charData.fetter.cv && <>Dubladores</>}
                                            </button>
                                        </h2>
                                        <div id="profile" className="accordion-collapse collapse" data-bs-parent="#profileColapse">
                                            <div className="accordion-body">
                                                {charData.fetter.description && <div>
                                                    {charData.fetter.description.split("\\n").map((line, index) =>
                                                        <p className="mb-1" key={`desc-key-${index}`}>{line}</p>
                                                    )}
                                                </div>
                                                }
                                                {(charData.fetter.description && charData.fetter.cv) && <hr />}
                                                {charData.fetter.cv &&
                                                    <div >
                                                        <div className="d-flex justify-content-between border-bottom">
                                                            <p className="mb-0 mt-1">Japonês</p>
                                                            <p className="mb-0 mt-1">{charData.fetter.cv.CV_JP}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-between border-bottom">
                                                            <p className="mb-0 mt-1">Chinês</p>
                                                            <p className="mb-0 mt-1">{charData.fetter.cv.CV_CN}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-between border-bottom">
                                                            <p className="mb-0 mt-1">Inglês</p>
                                                            <p className="mb-0 mt-1">{charData.fetter.cv.CV_EN}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-between border-bottom">
                                                            <p className="mb-0 mt-1">Coreano</p>
                                                            <p className="mb-0 mt-1">{charData.fetter.cv.CV_KR}</p>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="col-12 pt-2 pb-3" style={{ backgroundColor: "#212529" }}>
                            <div className="row">
                                {charData && <>
                                    <CharacterStats charData={charData.upgrade.sort((a, b) => a.level - b.level)} />
                                    <CharacterTraces skillData={charData.traces.subSkills} />
                                </>}
                                <div className="col-12 col-lg-4 mt-2">
                                    <div className="card h-100">
                                        <div className="card-body d-flex flex-column flex-md-row flex-lg-column justify-content-center">
                                            <button className="btn btn-sm btn-outline-secondary w-100 m-1">Download Background</button>
                                            <button className="btn btn-sm btn-outline-secondary w-100 m-1">Acessar meus guias</button>
                                            <button className="btn btn-sm btn-outline-secondary w-100 m-1">Criar guia para {charData.name}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-5 mb-2">
                                    <h3 className="ms-1">Habilidades</h3>
                                </div>
                                {(charData && mainSkillsId.length > 0) && <>
                                    {mainSkillsId.map((mSkill, index) =>
                                        <div key={`main-skills-type-index-${index}`} className="col-12 col-md-6 col-lg-4 mt-2">
                                            <CharacterSkill skillData={charData.traces.mainSkills[mSkill]} id={charData.traces.mainSkills[mSkill].id} />
                                        </div>
                                    )}
                                </>}
                            </div>
                        </div>
                        <div className="col-12 pb-5" style={{ backgroundColor: "#212529" }}>
                            <div className="row">
                                <div className="col-12 mt-5 mb-2">
                                    <h3 className="ms-1">Traços</h3>
                                </div>
                                {(charData && traceSkillsId.length > 0) && <>
                                    {traceSkillsId.map((mSkill, index) =>
                                        <div key={`trace-skills-type-index-${index}`} className="col-12 col-md-6 col-lg-4 mt-2">
                                            <TraceSkill skillData={charData.traces.subSkills[mSkill]}/>
                                        </div>
                                    )}
                                </>}
                            </div>
                        </div>
                        <div className="col-12 pb-5" style={{ backgroundColor: "#212529" }}>
                            <div className="row">
                                <div className="col-12 mt-5 mb-2">
                                    <h3 className="ms-1">Eidolons</h3>
                                </div>
                                {Object.keys(charData.eidolons).map((keyEidolon) =>
                                    <div className="col-12 col-lg-4 mt-2" key={`eidolon-${keyEidolon}`}>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-center">
                                                    <img style={{ maxWidth: `60%`, height: `auto` }} src={`https://api.hakush.in/hsr/UI/rank/_dependencies/textures/${charData.id}/${charData.id}_Rank_${charData.eidolons[keyEidolon].rank}.webp`} alt={`${charData.id}Rank_${charData.eidolons[keyEidolon].rank}`} />
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src={`https://api.yatta.top/hsr/assets/UI/skill/${charData.eidolons[keyEidolon].icon}.png`}
                                                        alt={charData.eidolons[keyEidolon].name} style={{ maxHeight: "3rem" }} />
                                                    <h4 className="ms-2">{charData.eidolons[keyEidolon].name}</h4>
                                                </div>
                                                <HTMLParagraphConvertEidolons id={keyEidolon}
                                                    originalText={charData.eidolons[keyEidolon].description}
                                                    params={charData.eidolons[keyEidolon].params}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>);
}