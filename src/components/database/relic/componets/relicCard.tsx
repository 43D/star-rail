import { useNavigate } from "react-router-dom";
import { getStringGender } from "../../../../core/util/GenderManipulator";
import { RelicItensYattaResponse } from "../../../../infra/api/iStarRailApi";

type prop = {
    relic: RelicItensYattaResponse;
    r4pc: boolean;
    r2pc: boolean;
}

export const RelicCard = ({ relic, r4pc, r2pc }: prop) => {
    const navigate = useNavigate();
    
    if(relic.isPlanarSuit && !(r2pc))
        return(<></>)

    if(!relic.isPlanarSuit && !(r4pc))
        return(<></>)

    return (<>
        <div className="p-1 card-char">
            <div className={`card h-100 bg-t${relic.levelList.reduce((maior, atual) => Math.max(maior, atual), - Infinity)}`} onClick={() => navigate(`/relic/${relic.id}`)} style={{ cursor: 'pointer' }}>
                <img src={`https://api.yatta.top/hsr/assets/UI//relic/${relic.icon}.png`} className="card-img-top p-4" alt={relic.name} />
                <div className="card-body d-flex justify-content-center align-items-center flex-column px-0 pt-2 pb-1 rounded-bottom">
                    <p className="card-title text-center mb-0">{getStringGender(relic.name)}</p>
                </div>
            </div>
        </div>
    </>)
}