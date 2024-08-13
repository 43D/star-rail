import { useEffect, useState } from "react";
import { NavBar } from "./components/menu";
import { HomeIndex } from "./components/home";
import { StarRailApi } from "./infra/api/StarRailApi";
import { CharacterIndex } from "./components/database/char";
import { FooterIndex } from "./components/footer";
import { iYattaStarRailApi } from "./infra/api/iStarRailApi";
import { getAllDataApi } from "./core/api/dataCollect";
import { LCIndex } from "./components/database/lc";
import { RelicIndex } from "./components/database/relic";

export type TabsList = `HOME` | `GUIA` | `CHAR` | `LC` | `RELIC` | `SEARCH`;

type TabMap = {
  [name in TabsList]: JSX.Element;
}

export type ApiInject = {
  starRailApi: iYattaStarRailApi;
}

const apis: ApiInject = {
  starRailApi: StarRailApi()
}

export const App = () => {
  const [_searchParse, _setSearchParse] = useState<string>(``);
  const [_tab, _setTab] = useState<TabsList>(`HOME`);
  const [_observer, _setObserver] = useState<number>(0);
  const getDataApi = getAllDataApi(apis);

  const mapTabs: TabMap = {
    HOME: <HomeIndex _observer={_observer} />,
    GUIA: <HomeIndex _observer={_observer} />,
    CHAR: <CharacterIndex _observer={_observer} />,
    LC: <LCIndex _observer={_observer} />,
    RELIC: <RelicIndex _observer={_observer} />,
    SEARCH: <HomeIndex _observer={_observer} />,
  }

  const getTab = () => mapTabs[_tab];

  const init = async () => {
    await getDataApi.init();
    _setObserver(prev => prev += 1);
  }

  useEffect(() => {
    if (_tab === "HOME")
      init();
  }, [_tab]);

  return (
    <>
      <NavBar _setTab={_setTab} _searchParse={_searchParse} _setSearchParse={_setSearchParse} />
      <div className="container-fluid" style={{ minHeight: "85vh" }}>
        {_tab}
        {getTab()}
      </div>
      <FooterIndex />
    </>
  )
};