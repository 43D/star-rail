import { useNavigate } from "react-router-dom";
import { getStringGender } from "../../../../core/util/GenderManipulator";
import { RelicItensHakusResponse } from "../../../../infra/api/iStarRailApi";

type prop = {
    relic: RelicItensHakusResponse;
    r4pc: boolean;
    r2pc: boolean;
    id: number;
}

export const RelicBetaCard = ({ relic, r4pc, r2pc, id }: prop) => {
    const navigate = useNavigate();

    if(!relic.set[4] && !(r2pc))
        return(<></>)

    if(relic.set[4] && !(r4pc))
        return(<></>)

    return (<>
        <div className="p-1 card-char">
            <div className={`card h-100 bg-t5`} onClick={() => navigate(`/relic/${id}`)} style={{ cursor: 'pointer' }}>
                <img src={`https://api.hakush.in/hsr/UI/itemfigures/${relic.icon.split("SpriteOutput/ItemIcon/")[1].split(".")[0]}.webp`} className="card-img-top p-4" alt={relic.en} />
                <div className="card-body d-flex justify-content-center align-items-center flex-column px-0 pt-2 pb-1 rounded-bottom">
                    <p className="card-title text-center mb-0">{getStringGender(relic.en)}</p>
                </div>
            </div>
        </div>
    </>)
}