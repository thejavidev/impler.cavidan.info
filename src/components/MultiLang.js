const getMultiLang = (eng, aze, rus) => {
    return localStorage.getItem("i18nextLng") === "english"
        ? eng
        : localStorage.getItem("i18nextLng") === "russian"
        ? rus
        
        : aze;
};

export { getMultiLang };
