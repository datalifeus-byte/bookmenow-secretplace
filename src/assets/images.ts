/** Local Unsplash/Pexels images shipped under /public/images */
export const images = {
  hero: {
    webp: '/images/hero.webp',
    jpg: '/images/hero.jpg',
  },
  about: {
    webp: '/images/rebar-site.webp',
    jpg: '/images/rebar-site.jpg',
  },
  aboutSecondary: {
    webp: '/images/rebar-cage.webp',
    jpg: '/images/rebar-cage.jpg',
  },
  advantages: {
    webp: '/images/steel-bars.webp',
    jpg: '/images/steel-bars.jpg',
  },
  production: {
    webp: '/images/worker-site.webp',
    jpg: '/images/worker-site.jpg',
  },
  pour: {
    webp: '/images/pour-rebar.webp',
    jpg: '/images/pour-rebar.jpg',
  },
  building: {
    webp: '/images/building.webp',
    jpg: '/images/building.jpg',
  },
  siteAerial: {
    webp: '/images/site-aerial.webp',
    jpg: '/images/site-aerial.jpg',
  },
  products: [
    { webp: '/images/rebar-stack.webp', jpg: '/images/rebar-stack.jpg' },
    { webp: '/images/rebar-stack2.webp', jpg: '/images/rebar-stack2.jpg' },
    { webp: '/images/rebar-cage.webp', jpg: '/images/rebar-cage.jpg' },
    { webp: '/images/rebar-site.webp', jpg: '/images/rebar-site.jpg' },
    { webp: '/images/pour-rebar.webp', jpg: '/images/pour-rebar.jpg' },
    { webp: '/images/worker-site.webp', jpg: '/images/worker-site.jpg' },
  ],
} as const

export type ImageSrc = { webp: string; jpg: string }
