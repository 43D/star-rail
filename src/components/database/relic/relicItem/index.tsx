import { useParams } from "react-router-dom";
import { getRelicsBetaIds, getRelicsIds } from "../../../../core/localStorage/localStorageDataManager";
import { NotFound } from "../../../NotFound";
import useWindowDimensions from "../../../../core/util/getWindowsDimension";
import { getCoverCharTheme } from "../../../../core/localStorage/localStorageManager";
import { iYattaStarRailApi, RelicByIdItensYattaResponse, relictCavernaPiece, relictPlanPiece } from "../../../../infra/api/iStarRailApi";
import { CSSProperties, useEffect, useState } from "react";
import { HTMLParagraphConvertEidolons } from "../../../../core/util/HTMLManipulator/HTMLParagraphConvertEidolons";
import { HTMLParagraphConvert } from "../../../../core/util/HTMLManipulator/HTMLParagraphConvert";

type props = {
    _observer: number;
    apiYatta: iYattaStarRailApi;
}

const describleStatus: { [key: string]: string; } = {
    hPDelta: "Vida",
    attackDelta: "Ataque",
    speedDelta: "Velocidade",
    attackAddedRatio: "Ataque",
    defenceAddedRatio: "Defesa",
    hPAddedRatio: "Vida",
    criticalChanceBase: "Chance crítico",
    criticalDamageBase: "Dano crítico",
    healRatioBase: "Bônus de cura realizada",
    statusProbabilityBase: "Taxa de acerto de efeito",
    fireAddedRatio: "Bônus de dano de fogo",
    iceAddedRatio: "Bônus de dano de gelo",
    imaginaryAddedRatio: "Bônus de dano imaginário",
    physicalAddedRatio: "Bônus de dano de físico",
    quantumAddedRatio: "Bônus de dano quântico",
    thunderAddedRatio: "Bônus de dano de raio",
    windAddedRatio: "Bônus de dano de vento",
    breakDamageAddedRatioBase: "Efeito de quebra",
    sPRatioBase: "Taxa de regeneração de energia"
}

export const RelicItemIndex = ({ _observer, apiYatta }: props) => {
    const { id } = useParams<string>();
    const ids = getRelicsIds();
    const betaIds = getRelicsBetaIds();
    if (!id)
        return <NotFound />
    if (!(ids.includes(Number(id)) || betaIds.includes(Number(id))))
        return <NotFound />

    const [relic, setRelic] = useState<RelicByIdItensYattaResponse>();
    const [rank, setRank] = useState<number>(5);
    const [atualType, setActualType] = useState<relictCavernaPiece | relictPlanPiece>("HEAD");
    const relicListCaverna: relictCavernaPiece[] = ["HEAD", "HAND", "BODY", "FOOT"];
    const relicListPlan: relictPlanPiece[] = ["NECK", "OBJECT"];
    const [lvl, setLvl] = useState<number>(20);
    const [maxLvl, setMaxLvl] = useState<number>(20);

    const { height, width } = useWindowDimensions();
    const themeCover = getCoverCharTheme();
    const [mainImage, setMainImage] = useState<string>("https://api.hakush.in/hsr/UI/itemfigures/${id}.webp");
    const ratio = (height / width);
    const DrRatio = 0.77;

    useEffect(() => {
        getData();
    }, [_observer, id]);

    const getData = async () => {
        setRelic(undefined);
        const res = await apiYatta.getReleaseRelicsById(id);
        res.data.isPlanarSuit ? setActualType("NECK") : setActualType("HEAD");
        const maxRank = Math.max.apply(null, res.data.levelList);
        const level = (res.data.isPlanarSuit) ?
            res.data.suiteConfig.NECK[String(maxRank)].maxLevel :
            res.data.suiteConfig.HEAD[String(maxRank)].maxLevel;

        setMainImage(`https://api.hakush.in/hsr/UI/itemfigures/${res.data.icon}.webp`);
        setRank(maxRank);
        setMaxLvl(level);
        setLvl(level);
        setRelic(res.data);
    }

    const onChangeLvl = (event: React.ChangeEvent<HTMLInputElement>) => setLvl(Number(event.target.value));
    const onChangeRank = (event: React.ChangeEvent<HTMLSelectElement>) => setRank(Number(event.target.value));

    useEffect(() => {
        if (!rank || !relic)
            return;
        const level = (relic.isPlanarSuit) ?
            relic.suiteConfig.NECK[String(rank)].maxLevel :
            relic.suiteConfig.HEAD[String(rank)].maxLevel;
        setMaxLvl(level);
        setLvl(prev => prev > level ? level : prev);
    }, [rank]);

    const getCalcs = (base: number, add: number, ratio: boolean) => {
        const num = base + (add * lvl);
        return ratio ? (num * 100).toFixed(2) + "%" : num.toFixed(1)
    }

    const style: CSSProperties = {
        backgroundImage: `url("${mainImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: ratio < DrRatio ? `auto 40%` : "auto 40vh",
        backgroundPositionY: ratio < DrRatio ? `center` : "100px",
        backgroundPositionX: ratio < DrRatio ? `80%` : `center`,
        zIndex: `-1`,
        height: `100vh`,
        width: `100vw`,
        overflow: "hidden",
        position: "fixed",
    }

    const getBackgroundCoverTheme = () => {
        if (themeCover === "PALETTE")
            return {
                ...style,
                zIndex: `-2`,
                backgroundPositionY: ratio < DrRatio ? `40%` : "100px",
                backgroundPositionX: ratio < DrRatio ? `66%` : `center`,
                transform: ratio < DrRatio ? `rotate(15deg) scale(2)` : `scale(2)`,
                filter: `blur(100px)`
            }

        const bg = {
            ...style,
            zIndex: `-2`,
            backgroundImage: `unset`,
            backgroundSize: `unset`,
            backgroundPosition: `unset`,
            backgroundColor: (rank === 5) ? '#f28f15' : (rank === 4) ? '#591cbf' : (rank === 3) ? '#1451d3' : "#bbb",
            background: (rank === 5) ? 'linear-gradient(180deg, rgba(227, 179, 119, 1) 0%, rgba(219, 149, 63, 1) 10%, rgba(175, 143, 104, 1) 100%)' :
                (rank === 4) ? 'linear-gradient(180deg, rgba(154, 114, 222, 1) 0%, rgba(89, 28, 191, 1) 36%, rgba(66, 20, 144, 1) 100%)' :
                    (rank === 3) ? 'linear-gradient(180deg, rgba(104, 137, 207, 1) 0%, rgba(20, 81, 211, 1) 36%, rgba(17, 48, 115, 1) 100%)'
                        : "#bbb"
        };
        return bg;
    }

    return (<>
        {(!["TRANS", "PATH"].includes(themeCover) && relic) &&
            <div style={{ ...getBackgroundCoverTheme() }}>
            </div>
        }
        <div style={{ ...style }}>
        </div>
        <div>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-12" style={{
                        zIndex: 10, paddingTop:
                            (ratio < DrRatio) ? `15px` : `calc(40vh + 64px)`
                    }}>
                        {relic && <>
                            <div className="card mb-1" style={{ maxWidth: ratio < DrRatio ? `30rem` : '100vw' }}>
                                <div className="card-body">
                                    <h1 className="mb-0">{relic.name}</h1>
                                </div>
                            </div>
                            <div className="card mb-1" style={{ maxWidth: ratio < DrRatio ? `30rem` : '100vw' }}>
                                <div className="card-body">
                                    <HTMLParagraphConvert id={id} params={relic.skillList["2"].params} lvl={0} originalText={"<strong>2 PC</strong>: " + relic.skillList["2"].description} />
                                    {relic.skillList["4"] && <>
                                        <hr />
                                        <HTMLParagraphConvert id={id} params={relic.skillList["4"].params} lvl={0} originalText={"<strong>4 PC</strong>: " + relic.skillList["4"].description} />
                                    </>}
                                </div>
                            </div>
                            <div className="card mb-1" style={{ maxWidth: ratio < DrRatio ? `30rem` : '100vw' }}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        {relic.isPlanarSuit && <>
                                            {relicListPlan.map((piece, index) =>
                                                <button key={`relic-btn-type-plan-index-${index}`}
                                                    className={"btn mx-1" + (atualType === piece ? " btn-success" : " btn-outline-secondary")}
                                                    style={{ width: "21.15%" }}
                                                    onClick={() => setActualType(piece)}>
                                                    {piece in relic.suite && <>
                                                        <img style={{ height: "auto", width: "100%" }} src={`https://api.yatta.top/hsr/assets/UI/relic/${relic.suite[piece].icon}.png`} alt={piece} />
                                                    </>}
                                                </button>
                                            )}
                                        </>}
                                        {!relic.isPlanarSuit && <>
                                            {relicListCaverna.map((piece, index) =>
                                                <button key={`relic-btn-type-car-index-${index}`}
                                                    style={{ width: "21.15%" }}
                                                    className={"btn mx-1" + (atualType === piece ? " btn-success" : " btn-outline-secondary")}
                                                    onClick={() => setActualType(piece)}>
                                                    {piece in relic.suite && <>
                                                        <img style={{ height: "auto", width: "100%" }} src={`https://api.yatta.top/hsr/assets/UI/relic/${relic.suite[piece].icon}.png`} alt={piece} />
                                                    </>}
                                                </button>
                                            )}
                                        </>}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion mb-2" id="profileColapseLC" style={{ maxWidth: (height / width) > 0.77 ? `100vw` : '30rem' }}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#profileLC"
                                            aria-expanded="false" aria-controls="profileLC">
                                            História
                                        </button>
                                    </h2>
                                    <div id="profileLC" className="accordion-collapse collapse" data-bs-parent="#profileColapseLC">
                                        <div className="accordion-body">
                                            {atualType in relic.suite && <>
                                                <HTMLParagraphConvertEidolons id={id} params={null} originalText={relic.suite[atualType].story} />
                                            </>}
                                        </div>
                                    </div>

                                    <h2 className="accordion-header border-top">
                                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#loreLC"
                                            aria-expanded="false" aria-controls="loreLC">
                                            Descrição
                                        </button>
                                    </h2>
                                    <div id="loreLC" className="accordion-collapse collapse" data-bs-parent="#profileColapseLC">
                                        <div className="accordion-body">
                                            {atualType in relic.suite && <>
                                                <HTMLParagraphConvertEidolons id={id} params={null} originalText={relic.suite[atualType].description} />
                                            </>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-5" style={{ maxWidth: ratio < DrRatio ? `30rem` : '100vw' }}>
                                <div className="card-body">
                                    {atualType in relic.suite && <>
                                        <h3 className="mb-4">{relic.suite[atualType].name}</h3>
                                        <div className="d-flex align-items-center mb-3">
                                            <label htmlFor="levelRange" className="form-label mb-0" style={{ minWidth: "75px" }}>Level {lvl}</label>
                                            <input type="range" className="form-range" min="0" max={maxLvl} step="1" value={lvl} id="levelRange" onChange={onChangeLvl} />
                                            <div className="input-group ms-2" style={{ maxWidth: `80px` }}>
                                                <select className="form-select" id="refinoRange" value={rank} onChange={onChangeRank}>
                                                    {relic.levelList.map((rankNumber, index) =>
                                                        <option key={`select-rank-relic-index-${index}`} value={rankNumber}>{rankNumber}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </>}
                                    {atualType in relic.suiteConfig && <>
                                        <div>
                                            {Object.keys(relic.suiteConfig[atualType][String(rank)].mainAffix).map((relicStatus, index) =>
                                                <div key={`relic-main-status-stats-index-${index}`}>
                                                    {(relicStatus in describleStatus && relicStatus in relic.suiteConfig[atualType][String(rank)].mainAffix) &&
                                                        <div className="d-flex justify-content-between">
                                                            <span>{describleStatus[relicStatus]}</span>
                                                            <span>
                                                                {getCalcs(relic.suiteConfig[atualType][String(rank)].mainAffix[relicStatus].affixBase,
                                                                    relic.suiteConfig[atualType][String(rank)].mainAffix[relicStatus].affixAdd,
                                                                    !relicStatus.includes(`Delta`))}
                                                            </span>
                                                        </div>
                                                    }
                                                    <hr className="mt-0 mb-2" />
                                                </div>
                                            )}
                                        </div>
                                    </>}
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    </>);
}