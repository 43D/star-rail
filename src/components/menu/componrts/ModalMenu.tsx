import { useState } from "react";
import { CoverCharTheme, getBetaContent, getCoverCharTheme, getLanguage, getMCGender, languageList, MCGender, setBetaContent, setCoverCharTheme, setLanguage, setMCGender } from "../../../core/localStorage/localStorageManager";

export const ModalMenuConfigs = () => {
    const [_searchParse, _setSearchParse] = useState<string>('');
    const [_language, _setLanguage] = useState<languageList>(getLanguage());
    const [_mCGender, _setMCGender] = useState<MCGender>(getMCGender());
    const [_betaContent, _setBetaContent] = useState<boolean>(getBetaContent());
    const [_coverTheme, _setCoverTheme] = useState<CoverCharTheme>(getCoverCharTheme());
    const [_refresh, _setRefresh] = useState<boolean>(false);

    const onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as languageList;
        setLanguage(value);
        _setLanguage(value);
        _setRefresh(true);
    }

    const onChangeBetaContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBetaContent(event.target.checked);
        _setBetaContent(event.target.checked);
        _setRefresh(true);
    }

    const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as MCGender;
        setMCGender(value);
        _setMCGender(value);
        _setRefresh(true);
    }

    const onChangeThemeCover = (color: CoverCharTheme) => {
        setCoverCharTheme(color);
        _setCoverTheme(color);
        _setRefresh(true);
    }

    const checkNeedRefresh = () => (_refresh) ? location.reload() : null;

    return (<>
        <div className="modal fade modal-md" id="modalSettings" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <i className="bi bi-gear me-2"></i>
                            Configurações
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={checkNeedRefresh} />
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-text px-1">
                                <div className="form-check form-switch d-flex align-items-center">
                                    <input className="form-check-input" checked={_betaContent} onChange={onChangeBetaContent} type="checkbox" role="switch" id="checkBoxBetaContent" />
                                </div>
                            </div>
                            <label className="input-group-text" htmlFor="checkBoxBetaContent" style={{ width: "calc(100% - 50px)" }}>Ativar conteúdos não lançados</label>
                        </div>
                        <div className="input-group mb-3 justify-content-center">
                            <span className="input-group-text">Estilo da capa de personagem</span>
                            <button className={'btn btn-sm ' + (_coverTheme === "PALETTE" ? "btn-success" : "btn-outline-secondary")}
                                onClick={() => onChangeThemeCover("PALETTE")}>
                                Paleta
                            </button>
                            <button className={'btn btn-sm ' + (_coverTheme === "PATH" ? "btn-success" : "btn-outline-secondary")}
                                onClick={() => onChangeThemeCover("PATH")}>
                                Caminho
                            </button>
                            <button className={'btn btn-sm ' + (_coverTheme === "TRANS" ? "btn-success" : "btn-outline-secondary")}
                                onClick={() => onChangeThemeCover("TRANS")}>
                                Transparente
                            </button>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="selectMCGender">Gênero</label>
                            <select className="form-select" id="selectMCGender" onChange={onChangeGender} value={_mCGender}>
                                <option value="F">Feminino</option>
                                <option value="M">Masculino</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="selectLanguage">Idioma</label>
                            <select className="form-select" id="selectLanguage" onChange={onChangeLanguage} value={_language}>
                                <option value="en">English</option>
                                <option value="pt">Português</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}