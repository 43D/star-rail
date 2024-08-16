import { useParams } from "react-router-dom";
import { getCharsBetaIds, getCharsIds } from "../../../../core/localStorage/localStorageDataManager";
import { NotFound } from "../../../NotFound";

type props = {
    _observer: number;
}

export const CharacterItemIndex = ({ _observer }: props) => {
    _observer;

    const { id } = useParams<string>();
    const ids = getCharsIds();
    const betaIds = getCharsBetaIds();
    if (!id)
        return <NotFound />
    if (!(ids.includes(Number(id)) || betaIds.includes(Number(id))))
        return <NotFound />

    return (<>
        char {id}
    </>);
}