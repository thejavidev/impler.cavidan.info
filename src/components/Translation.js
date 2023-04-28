import az from "./Locales/az";
import en from "./Locales/en";
import ru from "./Locales/ru";

const translations = {
	az,
	en,
	ru,
};

const getTrans = (key, locale = "az") => {
	locale = localStorage.getItem("lang");
	const currTranslation = translations[locale] ? translations[locale] : az;
	let transWord = currTranslation[key] ? currTranslation[key]	: az[key] ? az[key] : key;

	return transWord;
};

export { getTrans };