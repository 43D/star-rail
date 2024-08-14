import { useParams } from "react-router-dom";

type props = {
    _observer: number;
}

export const SearchIndex = ({ _observer }: props) => {
    _observer;
    const { parse } = useParams<string>();

    return (<>
        search {parse}
    </>);
}