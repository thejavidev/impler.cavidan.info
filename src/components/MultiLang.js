const getMultiLang = (aze, rus, eng) => {
    
    return localStorage.getItem("i18nextLng") === "azerbaycan"
        ? aze
        : localStorage.getItem("i18nextLng") === "russian"
        ? rus
        : localStorage.getItem("i18nextLng") === "english"
        ? eng
        : aze;
};

export { getMultiLang };
