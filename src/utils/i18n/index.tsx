import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locals/en.json'
import ru from './locals/ru.json'
import uz from './locals/uz.json'
import uzCyrl from './locals/uz-cyrl.json'

const resources = {
	en: {
		translation: en,
	},
	uz: {
		translation: uz,
	},
	'uz-Cyrl': {
		translation: uzCyrl,
	},
	ru: {
		translation: ru,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: sessionStorage.getItem('i18nextLng') || 'uz-Cyrl',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
