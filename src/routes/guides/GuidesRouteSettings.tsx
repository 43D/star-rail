import { GuidesIndex } from "../../components/guides";
import { RoutesProps, defaultTemplate } from "../routes";

export const GuidesRouteSettings = ({ injectAPI, nav, footer, _observable }: RoutesProps) => {
    injectAPI;
    const routes = [
        {
            path: '/guides',
            element: defaultTemplate(<GuidesIndex key={8} _observer={_observable} />, nav, footer),
        },
    ];

    return routes;
}
