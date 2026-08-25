'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitch({ locale }: { locale: 'en' | 'fa' }) {
  const pathname = usePathname()
  const target = locale === 'en' ? 'fa' : 'en'
  const href = pathname.replace(/^\/(en|fa)/, `/${target}`)
  return <Link className="lang-switch" href={href}>{locale === 'en' ? 'فارسی' : 'EN'}</Link>
}
