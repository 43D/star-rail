import { useParams } from "react-router-dom";
import { getLCsBetaIds, getLCsIds } from "../../../../core/localStorage/localStorageDataManager";
import { NotFound } from "../../../NotFound";

type props = {
    _observer: number;
}

export const LCItemIndex = ({ _observer }: props) => {
    _observer;
    const { id } = useParams<string>();
    const ids = getLCsIds();
    const betaIds = getLCsBetaIds();
    if (!id)
        return <NotFound />
    if (!(ids.includes(Number(id)) || betaIds.includes(Number(id))))
        return <NotFound />

    return (<>
        lc {id}
    </>);
}