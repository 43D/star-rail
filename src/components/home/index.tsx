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
        <div className="container-fluid">
            <div className="row justify-content-center">
               a
            </div>
        </div>
    </>);
}

