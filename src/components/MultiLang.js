const getMultiLang = (eng, aze, rus) => {
    return localStorage.getItem("lang") === "en"
        ? eng
        : localStorage.getItem("lang") === "ru"
        ? rus
        
        : aze;
};

export { getMultiLang };
