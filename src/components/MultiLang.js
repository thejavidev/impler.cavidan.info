const getMultiLang = (eng, aze, rus) => {
    return localStorage.getItem("i18nextLng") === "en"
        ? eng
        : localStorage.getItem("i18nextLng") === "ru"
        ? rus
        
        : aze;
};

export { getMultiLang };
