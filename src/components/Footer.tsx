import { useI18n } from '../i18n/I18nProvider'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>{t.footer.brand}</strong>
          <span>{t.footer.tagline}</span>
        </div>
        <div className="footer-meta">
          <p>{t.footer.rights}</p>
          <p className="footer-credits">{t.footer.credits}</p>
        </div>
      </div>
    </footer>
  )
}
