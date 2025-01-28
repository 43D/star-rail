import { useRoutes } from "react-router-dom";
import { MainRoute } from "./main/MainRouteSettings";
import { AdapterInject, ApiInject } from "../App";
import { NavBar } from "../components/menu";
import { FooterIndex } from "../components/footer";
import { DatabaseRouteSettings } from "./database/DatabaseRouteSettings";
import { GuidesRouteSettings } from "./guides/GuidesRouteSettings";

type props = {
  injectAPI: ApiInject;
  _observable: number;
  injectAdapter: AdapterInject;
}

export type RoutesProps = {
  injectAPI: ApiInject;
  nav: JSX.Element;
  footer: JSX.Element;
  _observable: number;
  injectAdapter: AdapterInject;
}



export const defaultTemplate = (mainElement: JSX.Element, nav: JSX.Element, footer: JSX.Element) => {
  footer;

  return (<>
    {nav}
    {mainElement}

  </>)
}

function RoutesApp({ injectAPI, _observable: _observable, injectAdapter }: props) {
  const nav = <NavBar />;
  const footer = <FooterIndex />;

  const main = MainRoute({ injectAPI, nav, footer, _observable, injectAdapter });
  const dbRoute = DatabaseRouteSettings({ injectAPI, nav, footer, _observable, injectAdapter });
  const gRoute = GuidesRouteSettings({ injectAPI, nav, footer, _observable, injectAdapter });

  const routes = useRoutes([
    ...main,
    ...dbRoute,
    ...gRoute,

  ]);

  return routes;
}

export default RoutesApp;