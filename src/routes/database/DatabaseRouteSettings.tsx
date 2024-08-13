import { CharacterIndex } from "../../components/database/char";
import { LCIndex } from "../../components/database/lc";
import { RelicIndex } from "../../components/database/relic";
import { RoutesProps, defaultTemplate } from "../routes";

export const DatabaseRouteSettings = ({ injectAPI, nav, footer, _observable }: RoutesProps) => {
    injectAPI;
    const routes = [
        {
            path: '/character',
            element: defaultTemplate(<CharacterIndex key={1} _observer={_observable} />, nav, footer),
        },
        {
            path: '/lc',
            element: defaultTemplate(<LCIndex key={2} _observer={_observable} />, nav, footer),
        },
        {
            path: '/relic',
            element: defaultTemplate(<RelicIndex key={3} _observer={_observable} />, nav, footer),
        }
    ];

    return routes;
}
