export type languageList = `pt` | `en`;

export const getLanguage = () => {
    const language = localStorage.getItem('language') as languageList;
    if (language == null) {
        setLanguage("pt")
        return "pt"
    }
    return language
};

export const setLanguage = (language: languageList) => {
    localStorage.setItem('language', language);
};

export const getBetaContent = () => {
    const beta = localStorage.getItem('beta');
    if (beta == null) {
        setBetaContent(false);
        return false;
    }
    return beta === `true`;
};

export const setBetaContent = (beta: boolean) => {
    localStorage.setItem('beta', String(beta));
};
