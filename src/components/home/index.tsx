import { useEffect } from "react";

type props = {
    _observer: number;
}

export const HomeIndex = ({ _observer }: props) => {
    _observer;

    useEffect(() => {
        getData();
    }, [_observer]);

    const getData = () => ``;

    return (<>
        <div className="container-fluid" style={{ minHeight: "75vh" }}>
            <div className="row">
               a
            </div>
        </div>
    </>);
}

