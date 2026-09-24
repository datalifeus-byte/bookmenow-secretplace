import { images } from '../assets/images'
import { useI18n } from '../i18n/I18nProvider'
import { Picture } from './Picture'

export function Products() {
  const { t } = useI18n()

  return (
    <section className="section products" id="products">
      <div className="container">
        <p className="eyebrow">{t.products.eyebrow}</p>
        <h2>{t.products.title}</h2>
        <p className="section-lead">{t.products.lead}</p>
        <div className="product-grid">
          {t.products.items.map((item, i) => (
            <article className="product-card" key={item.title}>
              <Picture
                src={images.products[i]}
                alt={item.imageAlt}
                className="product-photo"
              />
              <div className="product-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
