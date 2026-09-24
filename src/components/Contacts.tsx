import { useState, type FormEvent } from 'react'
import { useI18n } from '../i18n/I18nProvider'

export function Contacts() {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section contacts" id="contacts">
      <div className="container contacts-grid">
        <div>
          <p className="eyebrow">{t.contacts.eyebrow}</p>
          <h2>{t.contacts.title}</h2>
          <p className="section-lead">{t.contacts.lead}</p>
          <dl className="contact-facts">
            <div>
              <dt>{t.contacts.region}</dt>
              <dd>{t.contacts.regionValue}</dd>
            </div>
            <div>
              <dt>{t.contacts.phone}</dt>
              <dd>{t.contacts.phoneValue}</dd>
            </div>
            <div>
              <dt>{t.contacts.email}</dt>
              <dd>{t.contacts.emailValue}</dd>
            </div>
            <div>
              <dt>{t.contacts.hours}</dt>
              <dd>{t.contacts.hoursValue}</dd>
            </div>
          </dl>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            <span>{t.contacts.form.name}</span>
            <input name="name" required placeholder={t.contacts.form.namePh} />
          </label>
          <label>
            <span>{t.contacts.form.contact}</span>
            <input
              name="contact"
              required
              placeholder={t.contacts.form.contactPh}
            />
          </label>
          <label>
            <span>{t.contacts.form.message}</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder={t.contacts.form.messagePh}
            />
          </label>
          <button className="btn" type="submit">
            {t.contacts.form.submit}
          </button>
          <p className="form-note">{sent ? t.contacts.form.success : t.contacts.form.note}</p>
        </form>
      </div>
    </section>
  )
}
