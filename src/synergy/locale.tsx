import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LOCALE_STORAGE_KEY, copy, type Locale, type Messages } from './copy'

type Ctx = { locale: Locale; t: Messages; setLocale: (locale: Locale) => void }

const LocaleContext = createContext<Ctx | null>(null)

function readLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'uk' || stored === 'en') return stored
  } catch {
    /* private mode */
  }
  const q = new URLSearchParams(window.location.search).get('lang')
  return q === 'en' ? 'en' : 'uk'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale)

  useEffect(() => {
    const t = copy[locale]
    document.documentElement.lang = locale === 'uk' ? 'uk' : 'en'
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
    const url = new URL(window.location.href)
    url.searchParams.set('lang', locale)
    window.history.replaceState({}, '', url.toString())
  }, [locale])

  const setLocale = useCallback((next: Locale) => setLocaleState(next), [])
  const value = useMemo(() => ({ locale, t: copy[locale], setLocale }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale outside provider')
  return ctx
}
