import { useParams } from "react-router-dom";

type props = {
    _observer: number;
}

export const LCItemIndex = ({ _observer }: props) => {
    _observer;
    const { id } = useParams<string>();

    return (<>
        lc {id}
    </>);
}