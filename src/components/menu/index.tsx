import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalMenuConfigs } from "./componrts/ModalMenu";


export const NavBar = () => {
    const navigate = useNavigate();
    const [_searchParse, _setSearchParse] = useState<string>('');

    const onChangeSearchParse = (event: React.ChangeEvent<HTMLInputElement>) => _setSearchParse(event.target.value);
    const submitSearch = (event: React.FormEvent) => {
        event.preventDefault();
        navigate(`/search/${_searchParse}`);
    }
    
    return (<>
        <nav className="navbar navbar-expand-sm bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <p className="navbar-brand mb-0" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Build Rail</p>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => navigate("/guides")}>
                                <i className="bi bi-card-list me-2" />
                                Meus guias
                            </button>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-database me-2" />
                                Database
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button className="dropdown-item" onClick={() => navigate("/character")}>
                                        <i className="bi bi-person-vcard-fill me-2"></i>
                                        Personagens
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => navigate("/lc")}>
                                        <i className="bi bi-file-image-fill me-2"></i>
                                        Cones de luz
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => navigate("/relic")}>
                                        <i className="bi bi-vinyl-fill me-2"></i>
                                        Relíquias
                                    </button>
                                </li>
                            </ul>
                        </li>

                    </ul>
                    <div className="d-flex justify-content-end">
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
        <ModalMenuConfigs />
    </>);
}