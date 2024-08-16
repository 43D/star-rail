import { useParams } from "react-router-dom";
import { getRelicsBetaIds, getRelicsIds } from "../../../../core/localStorage/localStorageDataManager";
import { NotFound } from "../../../NotFound";

type props = {
    _observer: number;
}

export const RelicItemIndex = ({ _observer }: props) => {
    _observer;
    const { id } = useParams<string>();
    const ids = getRelicsIds();
    const betaIds = getRelicsBetaIds();
    if (!id)
        return <NotFound />
    if (!(ids.includes(Number(id)) || betaIds.includes(Number(id))))
        return <NotFound />


    return (<>
        relic {id}
    </>);
}