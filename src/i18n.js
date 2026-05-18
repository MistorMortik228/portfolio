import i18n from "i18next"
import { initReactI18next, Translation } from "react-i18next";
import eng from "./translations/en.json"
import rus from "./translations/ru.json"
import uzb from "./translations/uz.json"

const savedLang = localStorage.getItem('lang') || 'ru'

i18n.use(initReactI18next)
.init({
    resources: {
        en: {translation: eng},
        ru: {translation: rus},
        uz: {translation: uzb}
    },
    lng: savedLang,
    fallbackLng: 'ru'
})




export default i18n