import config from '@payload-config'
import { getPayload } from 'payload'
import { defaultContent } from './defaultContent'
export type Locale = 'en' | 'fa'
export async function getSiteData(locale: Locale) {
  const fallback = defaultContent[locale]
  try {
    const payload = await getPayload({ config })
    const [home, settings, order] = await Promise.all([
      payload.findGlobal({ slug: 'homepage', locale, fallbackLocale: locale }),
      payload.findGlobal({ slug: 'site-settings', locale, fallbackLocale: locale }),
      payload.findGlobal({ slug: 'order-page', locale, fallbackLocale: locale })
    ])
    return { home, settings, order, fallback }
  } catch { return { home: {}, settings: {}, order: {}, fallback } }
}
export function mediaUrl(value: unknown, fallback: string) {
  if (value && typeof value === 'object' && 'url' in value && typeof (value as any).url === 'string') return (value as any).url
  return fallback
}
