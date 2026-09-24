import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  LOCALE_STORAGE_KEY,
  translations,
  type Locale,
  type Translation,
} from './translations'

type I18nContextValue = {
  locale: Locale
  t: Translation
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

function detectInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'uk' || stored === 'en') return stored
  } catch {
    /* ignore */
  }
  const params = new URLSearchParams(window.location.search)
  const q = params.get('lang')
  if (q === 'en' || q === 'uk') return q
  return 'uk'
}

function applyDocumentLocale(locale: Locale) {
  const t = translations[locale]
  document.documentElement.lang = locale === 'uk' ? 'uk' : 'en'
  document.title = t.meta.title
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', t.meta.description)
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  useEffect(() => {
    applyDocumentLocale(locale)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
    const url = new URL(window.location.href)
    url.searchParams.set('lang', locale)
    window.history.replaceState({}, '', url.toString())
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const value = useMemo(
    () => ({ locale, t: translations[locale], setLocale }),
    [locale, setLocale],
  )

  return createElement(I18nContext.Provider, { value }, children)
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
