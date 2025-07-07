import { useEffect, useState } from "react";
import { StarRailApi, StarRailApiBeta } from "./infra/api/StarRailApi";
import { iHakushStarRailApi, iYattaStarRailApi } from "./infra/api/iStarRailApi";
import { getAllDataApi } from "./core/api/dataCollect";
import { HashRouter } from "react-router-dom";
import RoutesApp from "./routes/routes";
import { iLcBetaAdapter, LcBetaAdapter } from "./core/adapter/LcBetaAdapter";
import { iRelicBetaAdapter, RelicBetaAdapter } from "./core/adapter/RelicBetaAdapter";
import { CharBetaAdapter, iCharBetaAdapter } from "./core/adapter/CharBetaAdapter";

export type ApiInject = {
  starRailApi: iYattaStarRailApi;
  starRailApiBeta: iHakushStarRailApi;
}

export type AdapterInject = {
  lcBetaAdapter: iLcBetaAdapter;
  relicBetaAdapter: iRelicBetaAdapter;
  charBetaAdapter: iCharBetaAdapter;
}

export const App = () => {
  const [_observable, _setObservable] = useState<number>(0);

  const apis: ApiInject = {
    starRailApi: StarRailApi(),
    starRailApiBeta: StarRailApiBeta()
  }

  const adapters: AdapterInject = {
    lcBetaAdapter: LcBetaAdapter(),
    relicBetaAdapter: RelicBetaAdapter(),
    charBetaAdapter: CharBetaAdapter()
  }

  const getDataApi = getAllDataApi(apis);

  // Initialize the data collection API
  useEffect(() => {
    getDataApi.init().finally(() => {
      _setObservable(prev => prev += 1);
      console.log("All data loaded");
    });
  }, []);

  return (
    <HashRouter>
      <RoutesApp key={546} injectAPI={apis} injectAdapter={adapters} _observable={_observable} />
    </HashRouter>
  )
};