import { TabsList } from "../../App";

type props = {
    _setTab: (value: TabsList) => void;
    _searchParse: string;
    _setSearchParse: (value: string) => void;
}

export const NavBar = ({ _setTab, _searchParse, _setSearchParse }: props) => {

    const onChangeSearchParse = (event: React.ChangeEvent<HTMLInputElement>) => _setSearchParse(event.target.value);
    const submitSearch = (event: React.FormEvent) => {
        event.preventDefault();
        _setTab("SEARCH");
    }

    return (<>
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <p className="navbar-brand mb-0" style={{ cursor: "pointer" }} onClick={() => _setTab("HOME")}>Build Rail</p>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => _setTab("GUIA")}>
                                <i className="bi bi-card-list me-2"></i>
                                Guias
                            </button>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-database me-2"></i>
                                Database
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button className="dropdown-item" onClick={() => _setTab("CHAR")}>
                                        <i className="bi bi-person-vcard-fill me-2"></i>
                                        Personagens
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => _setTab("LC")}>
                                        <i className="bi bi-file-image-fill me-2"></i>
                                        Cones de luz
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => _setTab("RELIC")}>
                                        <i className="bi bi-vinyl-fill me-2"></i>
                                        Relíquias
                                    </button>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    <form onSubmit={submitSearch} className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onChangeSearchParse} value={_searchParse} />
                        <button type="submit" className="btn btn-outline-primary">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </>);
}