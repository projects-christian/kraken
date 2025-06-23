// src/i18n.ts
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import es from './locales/es.json'
import it from './locales/it.json'
import nl from './locales/nl.json'

export const SUPPORT_LOCALES = ['en', 'es', 'it', 'nl']

const i18n = createI18n({
  legacy: false, // ⛔️ esto es lo que elimina el modo legacy
  globalInjection: true, // para que puedas usar $t directamente
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    it,
    nl,
  },
})

export default i18n
