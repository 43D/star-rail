import { useParams } from "react-router-dom";
import { getLCsBetaIds, getLCsIds } from "../../../../core/localStorage/localStorageDataManager";
import { NotFound } from "../../../NotFound";
import { CSSProperties, useEffect, useState } from "react";
import { iYattaStarRailApi, LCByIdItensYattaResponse, pathType } from "../../../../infra/api/iStarRailApi";
import useWindowDimensions from "../../../../core/util/getWindowsDimension";
import { getCoverCharTheme } from "../../../../core/localStorage/localStorageManager";
import { getRankImg } from "../../../../core/util/getRankURLImage";
import { LightConeStats } from "./componets/LightConeStats";

type props = {
    _observer: number;
    apiYatta: iYattaStarRailApi;
}

export const LCItemIndex = ({ _observer, apiYatta }: props) => {
    _observer;
    const { id } = useParams<string>();
    const ids = getLCsIds();
    const betaIds = getLCsBetaIds();
    if (!id)
        return <NotFound />
    if (!(ids.includes(Number(id)) || betaIds.includes(Number(id))))
        return <NotFound />

    const [path, setPath] = useState<pathType | "">(``);
    const [lcData, setLCData] = useState<LCByIdItensYattaResponse>();
    const { height, width } = useWindowDimensions();
    const themeCover = getCoverCharTheme();
    const [openCollapse, setCollapse] = useState<boolean>(false);
    const [heightStatus, setHeightStatus] = useState<number>(0);

    const mainImage = `https://api.yatta.top/hsr/assets/UI/equipment/large/${id}.png`;
    const ratio = (height / width);
    const DrRatio = 0.77;
    const DrEscala = 1.65;

    const style: CSSProperties = {
        backgroundImage: `url("${mainImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: ratio < DrRatio ? `auto 60%` : ratio > DrEscala ? `60% auto ` : "auto 60vh",
        backgroundPositionY: ratio < DrRatio ? `top` : ratio > DrEscala ? "80px" : "100px",
        zIndex: `-1`,
        backgroundPositionX: ratio < DrRatio ? `87%` : `center`,
        height: `100vh`,
        width: `100vw`,
        overflow: "hidden",
        position: "fixed",
        transform: ratio < DrRatio ? "rotate(15deg)" : "",
    }

    useEffect(() => {
        getData();
    }, [_observer, id]);

    useEffect(() => {
        setHeightStatus(getHeightStatus());
    }, [_observer, id, lcData, openCollapse]);

    const getData = async () => {
        const res = await apiYatta.getReleaseLCById(id);
        setPath(res.data.types.pathType.id);
        setLCData(res.data);
    }

    const getBackgroundCoverTheme = () => {
        const background = {
            ...style,
            transform: ratio < DrRatio ? `rotate(15deg) scale(2)` : `scale(2)`,
            zIndex: `-2`,
            backgroundPositionY: "center",
            backgroundPositionX: ratio < DrRatio ? "66%" : "center",
            filter: `blur(100px)`
        };

        if (themeCover === "PALETTE")
            return background;

        return background;
    }

    const getHeightStatus = () => {
        const element = document.querySelector("#card-lc-status");
        return element ? element.clientHeight : 0;
    }

    return (<>
        {themeCover != "TRANS" &&
            <div style={{ ...getBackgroundCoverTheme() }}>
            </div>
        }
        <div style={{ ...style }}>
        </div >
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style={{
                        zIndex: 10, paddingTop:
                            (ratio < DrRatio) ? openCollapse ? `15px` : `calc( 100vh - 235px - ${(heightStatus + 15)}px )` :
                                ratio > DrEscala ? "calc(75vw + 84px)" : `calc(60vh + 84px)`
                    }}>
                        {lcData && <>
                            <div className="card mb-1" style={{ maxWidth: ratio < DrRatio ? `30rem` : '100vw' }}>
                                <div className="card-body">
                                    <h1 className="mb-0">{lcData.name}</h1>
                                    <div className="d-flex align-items-end justify-content-between mt-2">
                                        <div className="d-flex align-items-center">
                                            <img className="" style={{ maxWidth: `1.8rem`, height: `auto` }} src={`https://api.yatta.top/hsr/assets/UI//profession/IconProfession${path}Small.png`} alt={path} />
                                            <h6 className="mb-0 ms-2">{lcData.types.pathType.name}</h6>
                                        </div>
                                        <img style={{ width: `auto`, height: `1.2rem` }} src={getRankImg(lcData.rank)} alt={`rank_${lcData.rank}`} />
                                    </div>
                                </div>
                            </div>
                            { }
                            {lcData.description &&
                                <div className="accordion mb-2" id="profileColapseLC" style={{ maxWidth: (height / width) > 0.77 ? `100vw` : '30rem' }}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#profileLC"
                                                aria-expanded="false" aria-controls="profileLC" onClick={() => setCollapse(prev => !prev)}>
                                                Introdução
                                            </button>
                                        </h2>
                                        <div id="profileLC" className="accordion-collapse collapse" data-bs-parent="#profileColapseLC">
                                            <div className="accordion-body">
                                                {lcData.description.split("\\n").map((line, index) =>
                                                    <p className="mb-1" key={`desc-lc-key-${index}`}>{line}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="card mb-1" id="card-lc-status" style={{ maxWidth: ratio < DrRatio ? `30rem` : '100vw' }}>
                                <div className="card-body">
                                    <LightConeStats lcData={lcData} />
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}