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
                    <div className="d-flex" >
                        <form onSubmit={submitSearch} className="d-flex" role="search">
                            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" onChange={onChangeSearchParse} value={_searchParse} />
                            <button type="submit" className="btn btn-outline-primary">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                        <button className="btn ms-2 btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modalSettings">
                            <i className="bi bi-gear"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <div className="modal fade" id="modalSettings" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <i className="bi bi-gear me-2"></i>
                            Configurações
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-text px-1">
                                <div className="form-check form-switch d-flex align-items-center">
                                    <input className="form-check-input" type="checkbox" role="switch" id="checkBoxBetaContent" />
                                </div>
                            </div>
                            <label className="input-group-text" htmlFor="checkBoxBetaContent" style={{width: "calc(100% - 50px)"}}>Ativar conteúdos não lançados</label>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="selectLanguage">Idioma</label>
                            <select className="form-select" id="selectLanguage">
                                <option value="1">Português</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}