import { useEffect, useState } from "react";
import { NavBar } from "./components/menu";
import { HomeIndex } from "./components/home";
import { StarRailApi } from "./infra/api/StarRailApi";
import { CharacterIndex } from "./components/char/Character";
import { setCharList } from "./core/localStorageCharManager";

export type TabsList = `HOME` | `GUIA` | `CHAR` | `LC` | `RELIC` | `SEARCH`;

type TabMap = {
  [name in TabsList]: JSX.Element;
}

const apis = {
  starRailApi: StarRailApi()
}



export const App = () => {
  const [_searchParse, _setSearchParse] = useState<string>(``);
  const [_tab, _setTab] = useState<TabsList>(`HOME`);
  const [_observer, _setObserver] = useState<number>(0);

  const mapTabs: TabMap = {
    HOME: <HomeIndex _observer={_observer} />,
    GUIA: <HomeIndex _observer={_observer} />,
    CHAR: <CharacterIndex _observer={_observer} />,
    LC: <HomeIndex _observer={_observer} />,
    RELIC: <HomeIndex _observer={_observer} />,
    SEARCH: <HomeIndex _observer={_observer} />,
  }

  const getTab = () => mapTabs[_tab];

  const getCharData = async () => {
    const res = await apis.starRailApi.getReleaseChar();
    setCharList(Object.values(res.data.items));
  }

  const init = async () => {
    await getCharData();
    _setObserver(prev => prev += 1);
  }

  useEffect(() => {
    if (_tab === "HOME")
      init();
  }, [_tab]);

  return (
    <>
      <NavBar _setTab={_setTab} _searchParse={_searchParse} _setSearchParse={_setSearchParse} />
      {_tab}
      {getTab()}
    </>
  )
};