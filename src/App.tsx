import { useState } from "react";
import { NavBar } from "./components/menu";
import { HomeIndex } from "./components/home";

export type TabsList = `HOME` | `GUIA` | `CHAR` | `LC` | `RELIC` | `SEARCH`;

type TabMap = {
  [name in TabsList]: JSX.Element;
}
const mapTabs: TabMap = {
  HOME: <HomeIndex />,
  GUIA: <HomeIndex />,
  CHAR: <HomeIndex />,
  LC: <HomeIndex />,
  RELIC: <HomeIndex />,
  SEARCH: <HomeIndex />,
}

export const App = () => {
  const [_searchParse, _setSearchParse] = useState<string>(``);
  const [_tab, _setTab] = useState<TabsList>(`HOME`);
  const getTab = () => mapTabs[_tab];

  return (
    <>
      <NavBar _setTab={_setTab} _searchParse={_searchParse} _setSearchParse={_setSearchParse}/>
      {_tab}
      {getTab()}
    </>
  )
};