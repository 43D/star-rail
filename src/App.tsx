import { useEffect, useState } from "react";
import { StarRailApi } from "./infra/api/StarRailApi";
import { iYattaStarRailApi } from "./infra/api/iStarRailApi";
import { getAllDataApi } from "./core/api/dataCollect";
import { HashRouter } from "react-router-dom";
import RoutesApp from "./routes/routes";

export type ApiInject = {
  starRailApi: iYattaStarRailApi;
}

export const App = () => {
  const [_observable, _setObservable] = useState<number>(0);
  
  const apis: ApiInject = {
    starRailApi: StarRailApi()
  }

  const getDataApi = getAllDataApi(apis);

  const init = async () => {
    await getDataApi.init();
    _setObservable(prev => prev += 1);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <HashRouter>
      <RoutesApp key={546} injectAPI={apis} _observable={_observable} />
    </HashRouter>
  )
};