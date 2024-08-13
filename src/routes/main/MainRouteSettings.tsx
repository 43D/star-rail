import { HomeIndex } from "../../components/home";
import { NotFound } from "../../components/NotFound";
import { RoutesProps, defaultTemplate } from "../routes";

export const MainRoute = ({ nav, footer, _observable }: RoutesProps) => {
    const routes = [
        {
            path: '/',
            element: defaultTemplate(<HomeIndex key={0} _observer={_observable} />, nav, footer),
        },
        {
            path: '/*',
            element: defaultTemplate(<NotFound key={404} />, nav, footer)
        }
    ];

    return routes;
}
