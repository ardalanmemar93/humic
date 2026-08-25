import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'

export function generateStaticParams() { return [{ locale: 'en' }, { locale: 'fa' }] }

export default async function LocaleLayout({ children, params }: { children: ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!['en', 'fa'].includes(locale)) notFound()
  return <div lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>{children}</div>
}
