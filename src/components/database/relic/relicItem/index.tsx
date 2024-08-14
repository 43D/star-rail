import { useParams } from "react-router-dom";

type props = {
    _observer: number;
}

export const RelicItemIndex = ({ _observer }: props) => {
    _observer;
    const { id } = useParams<string>();

    return (<>
        relic {id}
    </>);
}