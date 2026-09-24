import type { ImageSrc } from '../assets/images'

type Props = {
  src: ImageSrc
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function Picture({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority,
}: Props) {
  return (
    <picture className={className}>
      <source srcSet={src.webp} type="image/webp" />
      <img
        src={src.jpg}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  )
}
