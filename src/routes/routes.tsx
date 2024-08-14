import { useRoutes } from "react-router-dom";
import { MainRoute } from "./main/MainRouteSettings";
import { ApiInject } from "../App";
import { NavBar } from "../components/menu";
import { FooterIndex } from "../components/footer";
import { DatabaseRouteSettings } from "./database/DatabaseRouteSettings";
import { GuidesRouteSettings } from "./guides/GuidesRouteSettings";

type props = {
  injectAPI: ApiInject;
  _observable: number;
}

export type RoutesProps = {
  injectAPI: ApiInject;
  nav: JSX.Element;
  footer: JSX.Element;
  _observable: number;
}

export const defaultTemplate = (mainElement: JSX.Element, nav: JSX.Element, footer: JSX.Element) => {
  return (<>
    {nav}
    <div className="container-fluid" style={{ minHeight: "75vh" }}>
      {mainElement}
    </div>
    {footer}
  </>)
}

function RoutesApp({ injectAPI, _observable: _observable }: props) {
  const nav = <NavBar />;
  const footer = <FooterIndex />;

  const main = MainRoute({ injectAPI, nav, footer, _observable });
  const dbRoute = DatabaseRouteSettings({ injectAPI, nav, footer, _observable });
  const gRoute = GuidesRouteSettings({ injectAPI, nav, footer, _observable });

  const routes = useRoutes([
    ...main,
    ...dbRoute,
    ...gRoute,

  ]);

  return routes;
}

export default RoutesApp;