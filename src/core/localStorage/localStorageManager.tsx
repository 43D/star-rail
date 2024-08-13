export type languageList = `pt` | `en`;

export type MCGender = 'F' | 'M';

export const setLanguage = (language: languageList) => localStorage.setItem('language', language);

export const setBetaContent = (beta: boolean) => localStorage.setItem('beta', String(beta));

export const setMCGender = (mc: MCGender) => localStorage.setItem('MCGender', mc);


export const getLanguage = () => {
    const language = localStorage.getItem('language') as languageList;
    if (language == null) {
        setLanguage("pt")
        return "pt"
    }
    return language
};

export const getBetaContent = () => {
    const beta = localStorage.getItem('beta');
    if (beta == null) {
        setBetaContent(false);
        return false;
    }
    return beta === `true`;
};

export const getMCGender = () => {
    const mc = localStorage.getItem('MCGender') as MCGender;
    if (mc == null) {
        setMCGender('F');
        return 'F';
    }
    return mc;
};