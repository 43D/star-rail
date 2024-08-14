import { CharacterIndex } from "../../components/database/char";
import { CharacterItemIndex } from "../../components/database/char/charItem";
import { LCIndex } from "../../components/database/lc";
import { LCItemIndex } from "../../components/database/lc/lcItem";
import { RelicIndex } from "../../components/database/relic";
import { RelicItemIndex } from "../../components/database/relic/relicItem";
import { SearchIndex } from "../../components/database/search";
import { NotFound } from "../../components/NotFound";
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
        },
        {
            path: '/character/:id',
            element: defaultTemplate(<CharacterItemIndex key={4} _observer={_observable} />, nav, footer),
        },
        {
            path: '/lc/:id',
            element: defaultTemplate(<LCItemIndex key={5} _observer={_observable} />, nav, footer),
        },
        {
            path: '/relic/:id',
            element: defaultTemplate(<RelicItemIndex key={6} _observer={_observable} />, nav, footer),
        },
        {
            path: '/search',
            element: defaultTemplate(<NotFound key={405} />, nav, footer)
        },
        {
            path: '/search/:parse',
            element: defaultTemplate(<SearchIndex key={7} _observer={_observable} />, nav, footer),
        },
    ];

    return routes;
}
